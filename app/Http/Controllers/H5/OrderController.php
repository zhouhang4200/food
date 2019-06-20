<?php

namespace App\Http\Controllers\H5;

use App\Models\CustomerDishDetail;
use App\Models\Dish;
use App\Models\Finance;
use App\Models\Order;
use Carbon\Carbon;
use EasyWeChat\Factory;
use EasyWeChat\Kernel\Exceptions\InvalidConfigException;
use EasyWeChat\Payment\Kernel\BaseClient;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Yansongda\Pay\Pay;

class OrderController extends Controller
{
    /**
     * h5菜肴列表
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
     * h5支付
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function pay(Request $request)
    {
        try {
            // 支付渠道
            $channel      = 0;
            $channel_name = '';

            //判断是不是微信
            if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false) {
                $channel      = 1;
                $channel_name = 'wechat';
            }

            //判断是不是支付宝
            if (strpos($_SERVER['HTTP_USER_AGENT'], 'AlipayClient') !== false) {
                $channel      = 2;
                $channel_name = 'alipay';
            }

            // 菜肴id
            $dish_id = $request->input('dish_id');
            // 生成订单号
            $trade_no = generateOrderNo();
            // 实付金额
            $amount = $request->input('amount'); // 目前带过来的是以分为单位
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

            $detailData = [];
            if (is_array($details) && count($details) > 0) {
                foreach ($details as $k => $detail) {
                    $detailData[$k]['dish_id']     = $detail['dish_id'];
                    $detailData[$k]['number']      = $detail['number'];
                    $detailData[$k]['table_id']    = $table_id;
                    $detailData[$k]['seat_id']     = $seat_id;
                    $detailData[$k]['merchant_id'] = $merchant_id;
                }
            }

            myLog('order_data', ['amount' => $amount, 'details' => $detailData, 'table_id' => $table_id, 'seat_id' => $seat_id, 'merchant_id' => $merchant_id, 'open_id' => $open_id]);

            //  创建订单
            $order = Order::create([
                'trade_no'        => $trade_no,
                'date'            => Carbon::now()->toDateString(),
                'out_trade_no'    => '',
                'status'          => 1, // 订单创建成功为1
                'channel'         => $channel,
                'buyer_id'        => '',
                'buyer_open_id'   => '',
                'amount'          => $amount * 0.01, // 单位元
                'original_amount' => $amount * 0.01,
                'detail'          => json_encode($detailData),
                'pay_status'      => 0,
                'pay_time'        => null,
                'channel_name'    => $channel_name,
                'merchant_id'     => $merchant_id,
                'table_id'        => $table_id,
                'seat_id'         => $seat_id,
                'comment'         => '',
                'pay_info'        => '',
            ]);

            // 支付
            if ($channel == 1) { # 微信支付
                $config = config('wechat.pay_config');
                $app    = Factory::payment($config);
                $jssdk  = $app->jssdk;

                myLog('wechat_pay_one', ['jssdk' => $jssdk, 'config' => $config]);
                // 微信以分为单位，前台传过来的数据也是以分为单位
                $result = $app->order->unify([
                    'body'             => '桌号：' . $table_id . ',座位号：' . $seat_id . ',扫码点餐,' . '总计：' . $amount * 0.01 . '元',
                    'out_trade_no'     => $trade_no,
                    'total_fee'        => $amount,
                    'attach'           => $order->id,
                    'spbill_create_ip' => '',
                    'notify_url'       => url('/h5/wechat/notify'),
                    'trade_type'       => 'JSAPI',
                    'openid'           => $open_id,
                ]);

                myLog('wechat_pay_result', ['result' => $result]);

                // 预支付订单号,生成js需要的信息
                $prepayId        = $result['prepay_id'];
                $jsApiParameters = $jssdk->bridgeConfig($prepayId);

                myLog('wechat_pay_jsApiParameters', ['jsApiParameters' => $jsApiParameters, 'result' => $result]);

                return response()->json(['status' => 1, 'jsApiParameters' => $jsApiParameters]);
            } elseif ($channel == 2) { # 支付宝支付
                $payForm = Pay::alipay(config('pay.ali'))->wap([
                    'out_trade_no' => $order->trade_no,
                    'total_amount' => $amount * 0.01, // 单位元
                    'subject'      => '桌号:' . $table_id . ',座位号:' . $seat_id . ',扫码点餐,' . '总计:' . $amount * 0.01 . '元',
                ]);
                myLog('alipay_result', ['result' => $payForm->getContent()]);

                return response()->json(['status' => 1, 'pay_form' => $payForm->getContent()]);
            }

            return response()->json(['status' => 1, 'data' => $order]);
        } catch (InvalidConfigException $e) {
            myLog('wechat_pay_InvalidConfigException', ['data' => $e->getLine() . $e->getMessage()]);

            return response()->json(['status' => 0, 'jsApiParameters' => '']);
        } catch (\Exception $e) {
            myLog('pay_error', ['message' => '【' . $e->getLine() . $e->getFile() . '】' . '【' . $e->getMessage() . '】']);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * 支付宝通知
     *
     * @return bool|\Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function alipayNotify()
    {
        try {
            $alipay = Pay::alipay(config('pay.ali'));

            $data = $alipay->verify();

            myLog('alipay_notify_data', ['data' => $data]);

            # 支付宝确认交易成功
            if (in_array($data->trade_status, ['TRADE_SUCCESS', 'TRADE_FINISHED'])) {
                // 查找 订单
                $order = Order::where('trade_no', $data->out_trade_no)
                    ->first();

                # 查到充值订单
                if ($order) {
                    DB::beginTransaction();
                    try {
                        if ($order->amount != $data->total_amount) {
                            myLog('alipay_notify_error', ['data' => '支付宝返回金额与订单交易金额不符']);
                            DB::rollback();
                            return true;
                        }

                        // 写入外部订单号和点的详细菜单写入表
                        $order->pay_status    = 1; // 支付成功状态
                        $order->out_trade_no  = $data->trade_no;
                        $order->pay_time      = date("Y-m-d H:i:s");
                        $order->buyer_id      = $data->buyer_id;
                        $order->buyer_open_id = $data->app_id;
                        $order->pay_info      = $data;

                        if ($order->save()) {
                            // 支付成功，写入点餐详情
                            $insertData = $this->getCustomerDishDetail($order);

                            DB::table('customer_dish_details')->insert($insertData);

                            // 写入流水信息
                            $this->financeInsert($order);

                            DB::commit();
                        } else {
                            myLog('alipay_notify_error', ['data' => '写入订单失败:' . $order->trade_no]);
                            DB::rollBack();
                            return true;
                        }
                    } catch (\Exception $e) {
                        myLog('alipay_notify_error', ['data' => $e->getLine() . $e->getMessage()]);
                        DB::rollback();
                        return true;
                    }

                    DB::commit();

                    # 发送通知
                } else {
                    return true;
                }
            } else {
                return true;
            }
            return $alipay->success();
        } catch (\Exception $e) {
            DB::rollBack();
            myLog('alipay_notify_error', ['data' => $e->getLine() . $e->getMessage()]);
            return true;
        }
    }

    /**
     * 微信异步通知
     *
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function wechatNotify(Request $request)
    {
        try {
            // 判断是否支付成功
            $config = config('wechat.pay_config');
            $app    = Factory::payment($config);

            BaseClient::setDefaultOptions([
                'curl'   => [
                    CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4,
                ],
                'verify' => false  //不开启CURLOPT_SSL_VERIFYPEER, 这里后来线上ssl报错加的，原因忘了
            ]);

            $response = $app->handlePaidNotify(function ($message, $fail) {
                myLog('wechat_notify_data', ['data' => $message]); // 写入日志

                $orderSn = $message['out_trade_no'];

                $order = Order::where('trade_no', $orderSn)->first();

                if ($order) {
                    //开启事务并上锁
                    DB::beginTransaction();
                    try {
                        if ($order->amount * 100 != array_get($message, 'total_fee')) {
                            DB::rollBack();
                            return true;
                        }

                        // 用户是否支付成功
                        if ($message['return_code'] === 'SUCCESS' && array_get($message, 'result_code') === 'SUCCESS') {
                            // 写入外部订单号和点的详细菜单写入表
                            $order->status        = 1; // 支付成功状态
                            $order->pay_status    = 1; // 支付成功状态
                            $order->out_trade_no  = array_get($message, 'transaction_id');
                            $order->pay_time      = date("Y-m-d H:i:s");
                            $order->pay_info      = json_encode($message);
                            $order->buyer_open_id = $message['openid'];

                            if ($order->save()) {
                                // 支付成功，写入点餐详情
                                $insertData = $this->getCustomerDishDetail($order);
                                DB::table('customer_dish_details')->insert($insertData);
                                // 写入流水信息
                                $this->financeInsert($order);

                                DB::commit();
                            } else {
                                myLog('wechat_notify_error', ['data' => '写入订单失败:' . $order->trade_no]);

                                DB::rollBack();

                                return ture;
                            }
                        } else {
                            //支付失败直接结束
                            DB::rollBack();

                            return true;
                        }
                    } catch (\Exception $e) {
                        myLog('wechat_notify_error', ['data' => '微信通知异常:' . $e->getMessage(), 'ip' => ip2long(request()->ip())]);

                        //支付失败直接结束
                        DB::rollBack();

                        return true;
                    }
                    DB::commit();
                } else {
                    return true;
                }
            });

            return $response;
        } catch (\Exception $e) {
            DB::rollBack();
            myLog('wechat_notify_error', ['data' => '微信通知异常:' . $e->getMessage(), 'ip' => ip2long(request()->ip())]);
        }
    }

    /**
     * 客户点餐将点餐信息写到数据库
     *
     * @param $order
     * @return array
     */
    public function getCustomerDishDetail($order)
    {
        $insertData = [];
        foreach (json_decode($order->detail, true) as $detail) {
            $customerDishDetail = CustomerDishDetail::where('order_trade_no', $order->trade_no)
                ->where('dish_id', $detail['dish_id'])
                ->where('table_id', $detail['table_id'])
                ->where('seat_id', $detail['seat_id'])
                ->where('merchant_id', $detail['merchant_id'])
                ->where('number', $detail['number'])
                ->first();
            if ($customerDishDetail) {
                continue;
            } else {
                $insertData[] = [
                    'order_trade_no' => $order->trade_no,
                    'date'           => date("Y-m-d"),
                    'status'         => 0,
                    'dish_id'        => $detail['dish_id'],
                    'table_id'       => $detail['table_id'],
                    'seat_id'        => $detail['seat_id'],
                    'merchant_id'    => $detail['merchant_id'],
                    'number'         => $detail['number'],
                    'comment'         => '',
                    'created_at'     => date("Y-m-d H:i:s"),
                    'updated_at'     => date("Y-m-d H:i:s"),
                ];
            }
        }

        return $insertData;
    }

    /**
     * 写入流水信息
     *
     * @param $order
     * @return Finance|\Illuminate\Database\Eloquent\Model
     */
    public function financeInsert($order)
    {
        $dishDetail = $this->dishDetail($order);

        $has = Finance::where('order_trade_no', $order->trade_no)
            ->first();

        if ($has) {
            return $has;
        }

        $finance = Finance::create([
            'date'           => date("Y-m-d"),
            'order_trade_no' => $order->trade_no,
            'merchant_id'    => $order->merchant_id,
            'type'           => 1,
            'sub_type'       => $order->channel == 1 ? '11' : ($order->channel == 2 ? '12' : ''),
            'amount'         => $order->amount,
            'comment'        => '桌号【' . $order->table_id . '】座位号【' . $order->seat_id . '】点菜信息【' . $dishDetail . '】',
            'created_at'     => date("Y-m-d H:i:s"),
            'updated_at'     => date("Y-m-d H:i:s"),
        ]);

        return $finance;
    }

    /**
     * 拼接菜品详情字符串
     *
     * @param $order
     * @return string
     */
    public function dishDetail($order)
    {
        $detail = json_decode($order->detail, true);

        $data = '';
        foreach ($detail as $value) {
            $dish = Dish::find($value['dish_id']);
            $data .= $dish->name . '【' . $dish->amount . '元】' . '*' . $value['number'] . '份;';
        }

        return $data;
    }
}
