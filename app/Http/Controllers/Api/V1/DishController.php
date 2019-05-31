<?php

namespace App\Http\Controllers\Api\V1;

use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DishController extends Controller
{
    public function list(Request $request)
    {
        try {
            return response()->json(['status' => 1]);
        } catch (Exception $e) {
            myLog('vue-dish-error', ['失败原因：' => '【' . $e->getFile() . '】' . $e->getMessage()]);

            return response()->apiJson(1003);
        }
    }
}
