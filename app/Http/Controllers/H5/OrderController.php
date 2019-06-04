<?php

namespace App\Http\Controllers\H5;

use App\Models\CustomerDishDetail;
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

    /**
     * 客户点餐将点餐信息写到数据库
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function customerDishDetail(Request $request)
    {
        try {
            $table_id = $request->input('table_id');
            $seat_id = $request->input('seat_id');
            $open_id = $request->input('open_id');
            $type = $request->input('type');
            $dish_id = $request->input('dish_id');
            $number = $request->input('number'); // 点餐数量
            $dish = Dish::find($request->input('dish_id'));

            if ($dish) {
                CustomerDishDetail::updateOrCreate([
                    'table_id' => $table_id,
                    'seat_id' => $seat_id,
                    'open_id' => $open_id,
                    'type' => $type,
                    'number' => $number,
                    'dish_id' => $dish_id,
                ], [
                    'table_id' => $table_id,
                    'seat_id' => $seat_id,
                    'open_id' => $open_id,
                    'type' => $type,
                    'dish_id' => $dish_id,
                ]);
            } else {
                return response()->json(['status' => 0, 'data' => '']);
            }
            return response()->json(['status' => 1, 'data' => 'success']);
        } catch (\Exception $e) {
            return response()->json(['status' => 0, 'data' => '']);
        }
    }
}
