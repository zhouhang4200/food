<?php

namespace App\Http\Controllers\Vue;

use App\Models\CustomerDishDetail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class CustomerDishDetailController extends Controller
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

            $data = CustomerDishDetail::where('merchant_id', $merchant_id)
                ->filter($queryData)
                ->with('dish')
                ->with('order')
                ->orderBy(DB::raw('status,created_at'), 'asc')
                ->paginate(10);

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            myLog('customer_dish_detail_list_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * 更改客户点菜的状态为完成
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function served(Request $request)
    {
        try {
            $customerDishDetail = CustomerDishDetail::find($request->input('id'));

            $customerDishDetail->status = 1;
            $customerDishDetail->save();

            return response()->json(['status' => 1, 'data' => $customerDishDetail, 'message' => '操作成功!']);
        } catch (\Exception $e) {
            myLog('customer_dish_detail_served_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);

            return response()->json(['status' => 0, 'data' => '', 'message' => '操作失败!']);
        }
    }

    public function statuses(Request $request)
    {
        return response()->json(['status' => 1, 'data' => config('dish.statuses')]);
    }
}
