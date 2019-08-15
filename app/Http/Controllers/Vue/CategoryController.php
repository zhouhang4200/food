<?php

namespace App\Http\Controllers\Vue;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    /**
     * 类目列表
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function list(Request $request)
    {
        try {
            $name = $request->input('name');
            $filters = compact('name');

            $data = Category::filter($filters)->paginate(10);

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            myLog('category_list_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);
            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * 类目添加
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function add(Request $request)
    {
        try {
            $data = $request->all();
            $data['merchant_id'] = $request->user('web')->id;

            $category = Category::create($data);

            return response()->json(['status' => 1, 'data' => $category, 'message' => '添加成功']);
        } catch (\Exception $e) {
            myLog('category_add_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);
            return response()->json(['status' => 0, 'data' => '', 'message' => '添加失败']);
        }
    }

    /**
     * 类目修改
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function update(Request $request)
    {
        try {
            $data = $request->all();

            $category = Category::where('id', $data['id'])
                ->update($request->except(['id', 'merchant_id']));

            return response()->json(['status' => 1, 'data' => $category, 'message' => '编辑成功']);
        } catch (\Exception $e) {
            myLog('category_update_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);
            return response()->json(['status' => 0, 'data' => '', 'message' => '编辑失败']);
        }
    }

    /**
     * 类目删除
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function delete(Request $request)
    {
        try {
            $category = Category::find($request->input('id'));
            $category->dishes()->delete();
            $category->delete();

            return response()->json(['status' => 1, 'data' => $category, 'message' => '删除成功']);
        } catch (\Exception $e) {
            myLog('category_delete_error', ['message' => '【'. $e->getLine().'】'.'【'.$e->getMessage().'】']);
            return response()->json(['status' => 0, 'data' => '', 'message' => '删除失败']);
        }
    }
}
