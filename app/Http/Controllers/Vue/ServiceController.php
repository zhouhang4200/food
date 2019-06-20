<?php

namespace App\Http\Controllers\Vue;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    protected static $extensions = ['png', 'jpg', 'jpeg', 'gif'];

    /**
     * 图片上传
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadImage(Request $request)
    {
        try {
            $file = request('file');
            $name = $request->input('name', '');
            $path =  public_path("/resources/vue/upload/image/".date('Ymd')."/");

            $extension = $file->getClientOriginalExtension();

            if ($extension && !in_array(strtolower($extension), static::$extensions)) {
                return response()->ajaxFail('图片上传失败：图片格式不正确!');
            }

            if (!$file->isValid()) {
                return response()->ajaxFail('图片上传失败：无效的图片！');
            }

            if (!file_exists($path)) {
                mkdir($path, 0755, true);
            }
            $randNum = rand(1, 100000000) . rand(1, 100000000);

            $fileName = time().substr($randNum, 0, 6).'.'.$extension;

            $path = $file->move($path, $fileName);

            $path = strstr($path, '/resources');

            $finalPath =  str_replace('\\', '/', $path);

            return response()->json(['status' => 1, 'path' => $finalPath, 'name' => $name]);
        } catch (\Exception $e) {
            return response()->ajaxFail('图片上传失败：服务器异常！');
        }
    }

    /**
     * 获取所有的分类
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function category(Request $request)
    {
        try {
            $data = Category::get();

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            return response()->ajaxFail('服务器异常！');
        }
    }
}
