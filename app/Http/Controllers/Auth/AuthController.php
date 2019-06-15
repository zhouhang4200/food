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
            $original_url = $request->input('original_url');

            if ($code) {
                $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.config('pay.wechat.app_id').'&secret='.config('pay.wechat.secret').'&code='.$code.'&grant_type=authorization_code';

                $client = new Client();

                $response = $client->request('post', $url, [
                    'multipart' => [],
                ]);

                $result = $response->getBody()->getContents();

                $result = json_decode($result, true);

                myLog('wechat_openid_response', ['openid' => $result]);

                if (isset($result['openid']) && $result['openid']) {
                    Cookie::make('open_id', $result['openid'], 5);

                    myLog('wechat_openid', ['openid' => $result['openid'], 'cookie' => Cookie::get('open_id')]);

                    Header("Location: $original_url");
                } else {
                    myLog('wechat_openid_error', ['data' => 'openid获取失败']);
                }
                return response()->json(['status' => 1, 'data' => $code]);
            } else {
                return response()->json(['status' => 0, 'data' => $code]);
            }

            myLog('wechat_code', ['data' => $code]);
        } catch (\Exception $e) {
            myLog('wechat_code_error', ['data' => $e->getMessage()]);
        }
    }
}
