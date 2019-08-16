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

            $now = Carbon::now();
            $todayDate = $now->toDateString();
            $last7Date = $now->subDays(6)->toDateString();

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

            $now = Carbon::now();
            $todayDate = $now->toDateString();
            $last7Date = $now->subDays(29)->toDateString();

            $data = $this->orderStaticData($merchant_id, $last7Date, $todayDate, '近30日');

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

            $data = $this->orderYearStaticData($merchant_id, '每月');

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
     * @param $columnName
     * @param $endDate
     * @return mixed
     */
    public function orderStaticData($merchant_id, $startDate, $endDate, $columnName = '近7日')
    {
        $columnName1 = $columnName.'共计点菜数';
        $columnName2 = $columnName.'成功下单数';
        $columnName3 = $columnName.'成功下单金额';

        return DB::select("
                select date as '日期', sum(number) as '$columnName1', count(1) as '$columnName2', sum(amount) as '$columnName3' from
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
     * 订单年统计
     *
     * @param $columnName
     * @param $merchant_id
     * @return mixed
     */
    public function orderYearStaticData($merchant_id, $columnName = '所有')
    {
        $columnName1 = $columnName.'共计点菜数';
        $columnName2 = $columnName.'成功下单数';
        $columnName3 = $columnName.'成功下单金额';

        return DB::select("
                select month(date) as '日期', sum(number) as '$columnName1', count(1) as '$columnName2', sum(amount) as '$columnName3' from
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
     * @param $columnName
     * @return mixed
     */
    public function dishStaticData($merchant_id, $startDate, $endDate, $columnName = '近7日共计点菜数')
    {
        return DB::select("
            select b.name as '日期', sum(a.number) as '$columnName' from customer_dish_details a
            left join dishes b
            on a.dish_id = b.id
            where a.date >= '$startDate' and a.date <= '$endDate' and a.merchant_id = '$merchant_id'
            group by dish_id
        ");
    }

    /**
     * 所有菜品统计
     *
     * @param $merchant_id
     * @param $columnName
     * @return mixed
     */
    public function dishYearStaticData($merchant_id, $columnName = '所有共计点菜数')
    {
        return DB::select("
            select b.name as '日期', sum(a.number) as '$columnName' from customer_dish_details a
            left join dishes b
            on a.dish_id = b.id
            where a.merchant_id = '$merchant_id'
            group by dish_id
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

            $now = Carbon::now();
            $todayDate = $now->toDateString();
            $last7Date = $now->subDays(6)->toDateString();

            $data = $this->dishStaticData($merchant_id, $last7Date, $todayDate);

            return response()->json(['status' => 1, 'data' => $data]);

        } catch (\Exception $e) {
            myLog('dish_week_data', ['data' => $e->getLine().$e->getMessage()]);

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

            $now = Carbon::now();
            $todayDate = $now->toDateString();
            $last7Date = $now->subDays(29)->toDateString();

            $data = $this->dishStaticData($merchant_id, $last7Date, $todayDate, '近30日共计点菜数');

            return response()->json(['status' => 1, 'data' => $data]);

        } catch (\Exception $e) {
            myLog('dish_month_data', ['data' => $e->getLine().$e->getMessage()]);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * 所有统计
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function dishYearData(Request $request)
    {
        try {
            $merchant_id = $request->user('web')->id;

            $data = $this->dishYearStaticData($merchant_id);

            return response()->json(['status' => 1, 'data' => $data]);

        } catch (\Exception $e) {
            myLog('dish_year_data', ['data' => $e->getLine().$e->getMessage()]);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }
}
