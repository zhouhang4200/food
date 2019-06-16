<?php

namespace App\Http\Controllers\H5;

use App\Models\CustomerDishDetail;
use App\Models\Dish;
use App\Models\Order;
use Carbon\Carbon;
use EasyWeChat\Factory;
use EasyWeChat\Kernel\Exceptions\InvalidConfigException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Yansongda\Pay\Pay;

class OrderController extends Controller
{
    /**
     * 菜肴列表
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function dishList(Request $request)
    {
        try {
            $data = Dish::where('merchant_id', $request->input('merchant_id'))
                ->get();

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            return response()->json(['status' => 0, 'data' => $e->getMessage()]);
        }
    }

    /**
     * 支付
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function pay(Request $request)
    {
        try {
            // 支付渠道
            $channel = 0;

            //判断是不是微信
            if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false) {
                $channel = 1;
            }

            //判断是不是支付宝
            if (strpos($_SERVER['HTTP_USER_AGENT'], 'AlipayClient') !== false) {
                $channel = 2;
            }

            // 菜肴id
            $dish_id = $request->input('dish_id');

            // 生成订单号
            $trade_no = generateOrderNo();

            // 实付金额
            $amount = $request->input('amount');

            // 获取点餐详情
            $details = $request->input('detail');

            // 桌号
            $table_id = $request->input('table_id');

            // 座位号
            $seat_id = $request->input('seat_id');

            // 商户号
            $merchant_id = $request->input('merchant_id');
            // open_id
            $open_id = $request->input('open_id');

            myLog('pay', ['amount' => $amount, 'details' => $details, 'table_id' => $table_id, 'seat_id' => $seat_id, 'merchant_id' => $merchant_id, 'open_id' => $open_id]);

            if (is_array($details) && count($details) > 0) {
                foreach ($details as $detail) {
                    $detail['table_id'] = $table_id;
                    $detail['seat_id'] = $seat_id;
                    $detail['merchant_id'] = $merchant_id;
                }
            }
            //  创建订单
            $order = Order::create([
                'trade_no' => $trade_no,
                'date' => Carbon::now()->toDateString(),
                'out_trade_no' => '',
                'status' => 0, // 未支付
                'channel' => $channel,
                'buyer_id' => '',
                'buyer_open_id' => '',
                'amount' => $amount*100, // 单位元
                'original_amount' => $amount*100,
                'detail' => json_encode($details),
            ]);

            // 支付
            if ($channel == 1) { # 微信支付
//                Pay::wechat(config('pay.wechat'))->mp([
//                    'out_trade_no' => $order->trade_no,           // 订单号
//                    'total_fee' => $order->amount,              // 订单金额，**单位：分** 传过来的就是分
//                    'body' => '点餐订单支付',                   // 订单描述
////                    'spbill_create_ip' => '192.168.1.1',       // 支付人的 IP
//                    'openid' => $open_id,
//                ]);

                $config = config('wechat.pay_config');
                $app = Factory::payment($config);
                $jssdk = $app->jssdk;

                myLog('wechat_pay_one', ['jssdk' => $jssdk, 'config' => $config]);
                // 微信以分为单位，前台传过来的数据也是以分为单位
                try {
                    $result = $app->order->unify([
                        'body' => '桌号：'.$table_id.'座位号：'.$seat_id.'扫码点餐,'.'总计：'.$amount.'分',
                        'out_trade_no' => $trade_no,
                        'total_fee' => $amount,
                        'attach' => $order->id,
                        'spbill_create_ip' => '',
                        'notify_url' => url('/h5/wechat/notify'),
                        'trade_type' => 'JSAPI',
                        'openid' => $open_id,
                    ]);

                    myLog('wechat_pay_two', ['result' => $result]);
                } catch (InvalidConfigException $e) {
                    myLog('wechat_pay_InvalidConfigException', ['data' => $e->getLine().$e->getMessage()]);

                    return response()->json(['status' => 0, 'jsApiParameters' => '']);
                }

                // 预支付订单号,生成js需要的信息
                $prepayId = $result['prepay_id'];
                $jsApiParameters = $jssdk->bridgeConfig($prepayId);

                myLog('wechat_pay_jsApiParameters', ['jsApiParameters' => $jsApiParameters, 'result' => $result]);

                return response()->json(['status' => 1, 'jsApiParameters' => $jsApiParameters]);
            } elseif ($channel == 2) { # 支付宝支付
                $payPar = Pay::alipay(config('pay.ali'))->app([
                    'out_trade_no' => $order->trade_no,
                    'total_amount' => $order->amount, // 单位元
                    'subject' => '点餐订单支付',
                ]);

//                return response()->json(['status' => 1, 'message' => 'success', ['channel' => 2, 'trade_no' => $order->trade_no, 'par' => $payPar->getContent()]]);
            }
//                return response()->json(['status' => config('ali.base_config')]);
//            return response()->json(['status' => $payPar]);

            return response()->json(['status' => 1, 'data' => $order]);
        } catch (\Exception $e) {
            myLog('pay_error', ['message' => '【'. $e->getLine().$e->getFile().'】'.'【'.$e->getMessage().'】']);

            return response()->json(['status' => 0, 'data' => '']);

        }
    }

    /**
     * 支付宝通知
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Yansongda\Pay\Exceptions\InvalidConfigException
     * @throws \Yansongda\Pay\Exceptions\InvalidSignException
     */
    public function alipayNotify()
    {
        $alipay = Pay::alipay(config('ali.base_config'));

        try{
            $data = $alipay->verify();

            myLog('alipay', [$data]);

            # 支付宝确认交易成功
            if (in_array($data->trade_status,  ['TRADE_SUCCESS', 'TRADE_FINISHED'])) {
                // 查找 订单
                $order = Order::where('out_trade_no', $data->out_trade_no)
                    ->where('amount', $data->total_amount)
                    ->first();

                # 查到充值订单
                if ($order) {
                    DB::beginTransaction();

                    try {
                        $order->status = 1; // 成功
                        $order->buyer_id=$data->buyer_id;
                        $order->buyer_open_id=$data->buyer_open_id;
                        $order->save();

                        // 支付成功，写入点餐详情
                        $insertData = [];
                        foreach (json_decode($order->detail, true) as $detail) {
                            $insertData[] = [
                                'open_id' => '',
                                'channel' => $order->channel,
                                'dish_id' => $detail->dish_id,
                                'table_id' => $detail->table_id,
                                'seat_id' => $detail->seat_id,
                                'number' => $detail->number,
                                'tag' => '',
                                'created_at' => Carbon::now()->toDateString(),
                                'updated_at' => Carbon::now()->toDateString(),
                            ];
                        }

                        DB::table('customer_dish_details')->insert($insertData);

                        // 下单

                    } catch (\Exception $exception) {
                        myLog('alipayNotify', [$exception->getLine(), $exception->getMessage()]);
                        DB::rollback();
                    }

                    DB::commit();

                    # 发送通知
                    event((new NotificationEvent('channelPcPayResult', [
                        'message' => '充值成功',
                    ])));
                }
            }
        } catch (Exception $e) {
            \Log::debug('Alipay notify Error', [$e->getMessage()]);
        }

        return $alipay->success();
    }
    public function alipayReturn()
    {

    }
    public function wechatNotify()
    {
        myLog('wechat_notify_one', ['data' => 'start']);
    }
    public function wechatReturn()
    {

    }

    /**
     * 客户点餐将点餐信息写到数据库
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function customerDishDetail(Request $request)
    {
        try {
            $table_id = $request->input('table_id');
            $seat_id = $request->input('seat_id');
            $open_id = $request->input('open_id');
            $type = $request->input('type');
            $dish_id = $request->input('dish_id');
            $number = $request->input('number'); // 点餐数量
            $dish = Dish::find($request->input('dish_id'));

            if ($dish) {
                CustomerDishDetail::updateOrCreate([
                    'table_id' => $table_id,
                    'seat_id' => $seat_id,
                    'open_id' => $open_id,
                    'type' => $type,
                    'number' => $number,
                    'dish_id' => $dish_id,
                ], [
                    'table_id' => $table_id,
                    'seat_id' => $seat_id,
                    'open_id' => $open_id,
                    'type' => $type,
                    'dish_id' => $dish_id,
                ]);
            } else {
                return response()->json(['status' => 0, 'data' => '']);
            }
            return response()->json(['status' => 1, 'data' => 'success']);
        } catch (\Exception $e) {
            return response()->json(['status' => 0, 'data' => '']);
        }
    }
}
