<?php

namespace App\Http\Controllers\Vue;

use App\Models\Dish;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DishController extends Controller
{
    /**
     * 菜肴列表
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function list(Request $request)
    {
        try {
            $data = Dish::where('merchant_id', $request->user('web')->id)
                ->filter($request->all())
                ->with('category')
                ->paginate(10);

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            myLog('dish_list_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);
            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * 菜肴添加
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function add(Request $request)
    {
        try {
            $data = $request->all();

            $data = Dish::create(array_merge($data, ['merchant_id' => $request->user('web')->id]));

            return response()->json(['status' => 1, 'data' => $data, 'message' => '添加成功']);
        } catch (\Exception $e) {
            myLog('dish_add_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);
            return response()->json(['status' => 0, 'data' => '', 'message' => '添加失败']);
        }
    }

    /**
     * 菜肴修改
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function update(Request $request)
    {
        try {
            $data = $request->all();

            $result = Dish::where('id', $data['id'])
                ->update($request->except(['id', 'merchant_id', 'category']));

            return response()->json(['status' => 1, 'data' => $result, 'message' => '编辑成功']);
        } catch (\Exception $e) {
            myLog('dish_update_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);
            return response()->json(['status' => 0, 'data' => '', 'message' => '编辑失败']);
        }
    }

    /**
     * 菜肴删除
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function delete(Request $request)
    {
        try {
            $data = Dish::where('id', $request->id)
                ->delete();

            return response()->json(['status' => 1, 'data' => $data, 'message' => '删除成功']);
        } catch (\Exception $e) {
            myLog('dish_delete_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);
            return response()->json(['status' => 0, 'data' => '', 'message' => '删除失败']);
        }
    }
}
