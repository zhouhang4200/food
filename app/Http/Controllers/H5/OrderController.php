<?php

namespace App\Http\Controllers\H5;

use App\Models\Dish;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    public function dishList(Request $request)
    {
        try {
            $data = Dish::where('merchant_id', $request->merchant_id)
                ->get();

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            return response()->json(['status' => 0, 'data' => '']);
        }
    }
}
