<?php

namespace App\Http\Controllers\Vue;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;

class ServiceController extends Controller
{
    protected static $extensions = ['png', 'jpg', 'jpeg', 'gif'];


    public function uploadImage(Request $request)
    {
        try {
            $file = request('file');
            $name = $request->input('name', '');
            $path = public_path("/upload/" . date('Ymd') . "/");

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

            $fileName = time() . mt_rand(1, 100) . '.' . $extension;
            $filepath = strstr($file->move($path, $fileName), '/upload');
            $finalPath = str_replace('\\', '/', $filepath);

            $image = Image::make(public_path($finalPath));
            $image->resize(300, 200);
            $thumb_path = public_path("/upload/" . date('Ymd') . "/thumb");
            if (!file_exists($thumb_path)) {
                mkdir($thumb_path, 0755, true);
            }
            $thumb = $thumb_path . '/' . $fileName;
            $image->save($thumb);
            $thumb_file  = strstr($thumb, '/upload');
            $final_thumb = str_replace('\\', '/', $thumb_file);

            return response()->json(['status' => 1, 'path' => $finalPath, 'thumb' => $final_thumb, 'name' => $name]);
        } catch (\Exception $e) {
            myLog('upload_error', [$e->getFile() . $e->getLine() . $e->getMessage()]);

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
