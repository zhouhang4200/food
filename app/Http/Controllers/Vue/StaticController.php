<?php

namespace App\Http\Controllers\Vue;

use App\Models\CustomerDishDetail;
use App\Models\Dish;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class StaticController extends Controller
{
    public function dishWeekData(Request $request)
    {
        try {
            $merchant_id = $request->user('web')->id;
            $todayDate = Carbon::now()->toDateString();
            $last7Date = Carbon::now()->subDays(6)->toDateString();


        } catch (\Exception $e) {

        }
    }
}
