<?php

namespace App\Http\Controllers\Auth;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function wechatCodeCallback(Request $request)
    {
        try {
            $code = $request->input('code');

            $original_url = urldecode($request->input('original_url'));

            myLog('callback_first', ['code' => $code, 'original_url' => $original_url]);

            if ($code) {
                myLog('callback_second', ['code' => $code, 'original_url' => $original_url]);
                $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.config('pay.wechat.app_id').'&secret='.config('pay.wechat.secret').'&code='.$code.'&grant_type=authorization_code';

                $client = new Client();

                $response = $client->request('post', $url, [
                    'multipart' => [],
                ]);

                $result = $response->getBody()->getContents();

                $result = json_decode($result, true);

                myLog('wechat_openid_response', ['openid' => $result]);

                if (isset($result['openid']) && $result['openid']) {
                    session(['open_id' => $result['openid']]);

                    myLog('callback_third', ['code' => $code, 'original_url' => $original_url, 'openid' => $result['openid'], 'cookie' => session('open_id')]);

                    Header("Location: $original_url");
                } else {
                    myLog('wechat_openid_no_openid', ['data' => 'openid获取失败']);
                }
                return response()->json(['status' => 1, 'data' => $code]);
            }

            myLog('callback_no_code', ['code' => $code, 'original_url' => $original_url]);
        } catch (\Exception $e) {
            myLog('wechat_code_error', ['data' => $e->getMessage()]);
        }
    }
}
