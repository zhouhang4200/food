<?php

namespace App\Http\Controllers\Vue;

use App\Models\Dish;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    /**
     * 客户点餐详情列表
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function list(Request $request)
    {
        try {
            $merchant_id = $request->user('web')->id;

            $queryData = $request->all();
            $queryData['merchant_id'] = $merchant_id;

            $data = Order::where('merchant_id', $merchant_id)
                ->filter($queryData)
                ->orderBy('id', 'desc')
                ->paginate(10);

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            myLog('order_list_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function payStatus(Request $request)
    {
        try {
            return response()->json(['status' => 1, 'data' => config('dish.order.pay_status')]);
        } catch (\Exception $e) {
            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function channel(Request $request)
    {
        try {
            return response()->json(['status' => 1, 'data' => config('dish.order.channel')]);
        } catch (\Exception $e) {
            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * 订单详情
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function show(Request $request)
    {
        try {
            $order = Order::find($request->input('id'));

            $data = [
                'trade_no' => $order->trade_no,
                'out_trade_no' => $order->out_trade_no,
                'amount' => $order->amount.'元',
                'channel_name' => $order->channel == 1 ? '微信支付' : ($order->channel == 2 ? '支付宝支付' : ''),
                'pay_status' => $order->status == 1 ? '已支付' : '待支付',
                'created_at' => $order->created_at->toDateTimeString(),
                'comment' => $order->comment ?: '暂无',
                'dish_detail' => $this->dishDetail($order),
            ];

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            myLog('order_show_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);

            return response()->json(['status' => 0, 'data' => '']);
        }
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
            $data .= $dish->name.'【'.$dish->amount.'元】'.'*'.$value['number'].'份;';
        }

        return $data;
    }
}
