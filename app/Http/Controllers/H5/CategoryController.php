<?php

namespace App\Http\Controllers\H5;

use App\Models\Category;
use App\Models\Store;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function list(Request $request)
    {
        try {
            $merchant_id = $request->input('merchant_id');

            $categories = Category::where('merchant_id', $merchant_id)
                ->get();

            return response()->json(['status' => 1, 'data' => $categories]);
        } catch (\Exception $e) {
            myLog('h5_category_list_error', ['message' => '【' . $e->getLine() . '】' . '【' . $e->getMessage() . '】']);
            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    public function banner(Request $request) {
        try {
            $merchant_id = $request->input('merchant_id');

            $data = Store::where('merchant_id', $merchant_id)
                ->first();

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            myLog('h5_banner_error', ['message' => '【' . $e->getLine() . '】' . '【' . $e->getMessage() . '】']);
            return response()->json(['status' => 0, 'data' => '']);
        }
    }
}
