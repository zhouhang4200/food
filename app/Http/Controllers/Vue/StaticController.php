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
    /**
     * 订单7日统计
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function orderWeekData(Request $request)
    {
        try {
            $merchant_id = $request->user('web')->id;
            $todayDate = Carbon::now()->toDateString();
            $last7Date = Carbon::now()->subDays(6)->toDateString();

            $data = $this->orderStaticData($merchant_id, $last7Date, $todayDate);

            return response()->json(['status' => 1, 'data' => $data]);

        } catch (\Exception $e) {
            myLog('order_week_data', ['data' => $e->getLine().$e->getMessage()]);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * 订单30日统计
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function orderMonthData(Request $request)
    {
        try {
            $merchant_id = $request->user('web')->id;
            $todayDate = Carbon::now()->toDateString();
            $last7Date = Carbon::now()->subDays(29)->toDateString();

            $data = $this->orderStaticData($merchant_id, $last7Date, $todayDate);

            return response()->json(['status' => 1, 'data' => $data]);

        } catch (\Exception $e) {
            myLog('order_month_data', ['data' => $e->getLine().$e->getMessage()]);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * 订单年统计
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function orderYearData(Request $request)
    {
        try {
            $merchant_id = $request->user('web')->id;
            $year = Carbon::now()->year;

            $data = $this->orderYearStaticData($merchant_id, $year);

            return response()->json(['status' => 1, 'data' => $data]);

        } catch (\Exception $e) {
            myLog('order_year_data', ['data' => $e->getLine().$e->getMessage()]);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * 订单统计
     *
     * @param $merchant_id
     * @param $startDate
     * @param $endDate
     * @return mixed
     */
    public function orderStaticData($merchant_id, $startDate, $endDate)
    {
        return DB::select("
                select date as '日期', sum(number) as '共计点菜数', count(1) as '成功下单数', sum(amount) as '成功下单金额' from
                (
                    select b.merchant_id, b.date, a.trade_no, b.order_trade_no, b.amount as amount, c.number from finances b
                    left join orders a
                    on b.order_trade_no = a.trade_no
                    left join 
                      (select merchant_id, sum(number) as number, order_trade_no from customer_dish_details
                      where date >= '$startDate' and date <= '$endDate' and merchant_id = '$merchant_id'
                      group by order_trade_no) c
                    on b.order_trade_no = c.order_trade_no
                    where b.date >= '$startDate' and b.date <= '$endDate' and b.type = 1 and b.merchant_id = '$merchant_id'
                ) m
                group by m.date
            ");
    }

    /**
     * 订单月统计
     *
     * @param $year
     * @param $merchant_id
     * @return mixed
     */
    public function orderYearStaticData($merchant_id, $year)
    {
        return DB::select("
                select month(date) as '日期', sum(number) as '共计点菜数', count(1) as '成功下单数', sum(amount) as '成功下单金额' from
                (
                    select b.merchant_id, b.date, a.trade_no, b.order_trade_no, b.amount as amount, c.number from finances b
                    left join orders a
                    on b.order_trade_no = a.trade_no
                    left join 
                      (select merchant_id, sum(number) as number, order_trade_no from customer_dish_details
                      where merchant_id = '$merchant_id' 
                      group by order_trade_no) c
                    on b.order_trade_no = c.order_trade_no
                    where b.type = 1 and b.merchant_id = '$merchant_id' 
                ) m
                group by month(m.date)
            ");
    }

    /**
     * 菜品统计
     *
     * @param $merchant_id
     * @param $startDate
     * @param $endDate
     * @return mixed
     */
    public function dishStaticData($merchant_id, $startDate, $endDate)
    {
        return DB::select("
                select a.date, sum(a.number) as number, a.dish_id, b.name from customer_dish_details a
                left join dishes b
                on a.dish_id = b.id
                where a.date >= '$startDate' and a.date <= '$endDate' and a.merchant_id = '$merchant_id'
                group by a.dish_id
            ");
    }

    /**
     * 菜品7日统计
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function dishWeekData(Request $request)
    {
        try {
            $merchant_id = $request->user('web')->id;
            $todayDate = Carbon::now()->toDateString();
            $last7Date = Carbon::now()->subDays(6)->toDateString();

            $data = $this->dishStaticData($merchant_id, $last7Date, $todayDate);

            return response()->json(['status' => 1, 'data' => $data]);

        } catch (\Exception $e) {
            myLog('order_week_data', ['data' => $e->getLine().$e->getMessage()]);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * 菜品30日统计
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function dishMonthData(Request $request)
    {
        try {
            $merchant_id = $request->user('web')->id;
            $todayDate = Carbon::now()->toDateString();
            $last7Date = Carbon::now()->subDays(29)->toDateString();

            $data = $this->dishStaticData($merchant_id, $last7Date, $todayDate);

            return response()->json(['status' => 1, 'data' => $data]);

        } catch (\Exception $e) {
            myLog('order_month_data', ['data' => $e->getLine().$e->getMessage()]);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }
}
