<?php

namespace App\Http\Controllers\Vue;

use App\Models\Finance;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FinanceController extends Controller
{
    public function list(Request $request)
    {
        try {
            $merchant_id = $request->user('web')->id;

            $queryData                = $request->all();
            $queryData['merchant_id'] = $merchant_id;

            $data = Finance::where('merchant_id', $merchant_id)
                ->filter($queryData)
                ->orderBy('id', 'desc')
                ->paginate(10);

            return response()->json(['status' => 1, 'data' => $data]);
        } catch (\Exception $e) {
            myLog('finance_list_error', ['message' => '【' . $e->getLine() . '】' . '【' . $e->getMessage() . '】']);

            return response()->json(['status' => 0, 'data' => '']);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function subType(Request $request)
    {
        try {
            return response()->json(['status' => 1, 'data' => config('finance.sub_type')]);
        } catch (\Exception $e) {
            return response()->json(['status' => 0, 'data' => '']);
        }
    }
}
