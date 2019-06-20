<?php

namespace App\Http\Controllers\Vue;

use App\Models\Store;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StoreController extends Controller
{
    /**
     * 门店列表
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function list(Request $request)
    {
        try {
            $merchant_id = $request->user('web')->id;

            $data = Store::where('merchant_id', $merchant_id)
                ->where('pid', 0)
                ->get();

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            myLog('store_list_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * 门店添加
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function add(Request $request)
    {
        try {
            $data = $request->all();

            $data = Store::create(array_merge($data, ['merchant_id' => $request->user('web')->id]));

            return response()->json(['status' => 1, 'data' => $data, 'message' => '添加成功']);
        } catch (\Exception $e) {
            myLog('store_add_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);
            return response()->json(['status' => 0, 'data' => '', 'message' => '添加失败']);
        }
    }

    /**
     * 门店修改
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function update(Request $request)
    {
        try {
            $data = $request->all();

            $result = Store::where('id', $data['id'])
                ->update($request->except(['id', 'merchant_id']));

            return response()->json(['status' => 1, 'data' => $result, 'message' => '编辑成功']);
        } catch (\Exception $e) {
            myLog('store_update_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);
            return response()->json(['status' => 0, 'data' => '', 'message' => '编辑失败']);
        }
    }
}
