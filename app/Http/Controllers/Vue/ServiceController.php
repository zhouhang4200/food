<?php

namespace App\Http\Controllers\Vue;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;

class ServiceController extends Controller
{
    protected static $extensions = ['png', 'jpg', 'jpeg', 'gif'];

    /**
     * 图片下载
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function uploadImage(Request $request)
    {
        try {
            $file = request('file');

            if (!$file->isValid()) {
                return response()->ajaxFail('图片上传失败：无效的图片！');
            }

            $name = $request->input('name', '');

            $extension = $file->getClientOriginalExtension();

            if ($extension && !in_array(strtolower($extension), static::$extensions)) {
                return response()->ajaxFail('图片上传失败：图片格式不正确!');
            }

            $path = public_path("/upload/" . date('Ymd') . "/");
            if (!file_exists($path)) {
                mkdir($path, 0755, true);
            }

            $file_name = time() . mt_rand(1, 100) . '.' . $extension; // 文件名
            $file_path = strstr($file->move($path, $file_name), '/upload');
            $file_path = str_replace('\\', '/', $file_path); // 生成的大图路径

            // 生成略缩图
            $image = Image::make(public_path($file_path));
            $image->resize(300, 200);
            $thumb_path = public_path("/upload/" . date('Ymd') . "/thumb");
            if (!file_exists($thumb_path)) {
                mkdir($thumb_path, 0755, true);
            }
            $thumb = $thumb_path . '/' . $file_name;
            $image->save($thumb);
            $thumb_file = strstr($thumb, '/upload');
            $thumb_file = str_replace('\\', '/', $thumb_file); // 生成的略缩图路径

            return response()->json(['status' => 1, 'path' => $file_path, 'thumb' => $thumb_file, 'name' => $name]);
        } catch (\Exception $e) {
            myLog('upload_error', [$e->getFile() . $e->getLine() . $e->getMessage()]);

            return response()->ajaxFail('图片上传失败：服务器错误！');
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
