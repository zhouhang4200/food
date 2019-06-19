<?php

namespace App\Http\Controllers\Vue;

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
            return response()->json(['status' => 1, 'data' => config('dish.order_pay_status')]);
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
            return response()->json(['status' => 1, 'data' => config('dish.order_channel')]);
        } catch (\Exception $e) {
            return response()->json(['status' => 0, 'data' => '']);
        }
    }
}
