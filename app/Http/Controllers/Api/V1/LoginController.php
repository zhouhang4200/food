<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Merchant;
use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /**
     * vue登录
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws Exception
     */
    public function login(Request $request)
    {
        try {
            // 参数缺失
            if (is_null(request('phone')) || is_null(request('password'))) {
                return response()->apiJson(1001);
            }

            $merchant = Merchant::where('phone', request('phone'))->first();
            if (!$merchant) {
                return response()->apiJson(2006); // 用户不存在
            }

            if (Hash::check(request('password'), $merchant->password)) {
                // 过期
                if ($merchant->status == 0) {
                    return response()->apiJson(2007); // 用户被禁用
                }

                $data = [
                    'name'  => $merchant->name,
                    'phone' => $merchant->phone,
                    'pid'   => $merchant->pid,
                    'date'  => $merchant->date,
                    'token' => $merchant->createToken('orderingFood')->accessToken,
                ];
                return response()->apiJson(0, $data);
            } else {
                return response()->apiJson(2001);
            }
        } catch (Exception $e) {
            myLog('vue-login-error', ['失败原因：' => '【' . $e->getFile() . '】' . $e->getMessage()]);

            return response()->apiJson(1003);
        }
    }
}
