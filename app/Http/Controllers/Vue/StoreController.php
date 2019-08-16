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
                ->paginate(10);

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            myLog('store_list_error', ['message' => '【' . $e->getLine() . '】' . '【' . $e->getMessage() . '】']);

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
            $data                   = $request->all();
            $data['merchant_id']    = $request->user('web')->id;
            $data['pid']            = 0;
            $data['status']         = 0; // 审核中
            $data['license_number'] = $request->input('license_number', '');
            $data['legal_person']   = $request->input('legal_person', '');
            $data['legal_phone']    = $request->input('legal_phone', '');
            $data['banner1']        = $request->input('banner1') ?? '';
            $data['banner2']        = $request->input('banner2') ?? '';
            $data['banner3']        = $request->input('banner3') ?? '';
            $data['banner4']        = $request->input('banner4') ?? '';

            $data = Store::create($data);

            return response()->json(['status' => 1, 'data' => $data, 'message' => '添加成功']);
        } catch (\Exception $e) {
            myLog('store_add_error', ['message' => '【' . $e->getLine() . '】' . '【' . $e->getMessage() . '】']);
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
            $data                   = $request->all();
            $data['merchant_id']    = $request->user('web')->id;
            $data['pid']            = 0;
            $data['license_number'] = $request->input('license_number') ?? '';
            $data['legal_person']   = $request->input('legal_person') ?? '';
            $data['legal_phone']    = $request->input('legal_phone') ?? '';
            $data['banner1']        = $request->input('banner1') ?? '';
            $data['banner2']        = $request->input('banner2') ?? '';
            $data['banner3']        = $request->input('banner3') ?? '';
            $data['banner4']        = $request->input('banner4') ?? '';

            $result = Store::where('id', $data['id'])
                ->update($data);

            return response()->json(['status' => 1, 'data' => $result, 'message' => '编辑成功']);
        } catch (\Exception $e) {
            myLog('store_update_error', ['message' => '【' . $e->getLine() . '】' . '【' . $e->getMessage() . '】']);
            return response()->json(['status' => 0, 'data' => '', 'message' => '编辑失败']);
        }
    }
}
