<?php

namespace App\Http\Controllers\H5;

use EasyWeChat\Work\Application;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use mysql_xdevapi\Exception;

class H5Controller extends Controller
{
    function index(Request $request)
    {
        try {
            //判断是不是微信
            if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false) {
                if (! session('open_id')) {
                    $code = $request->input('code', ''); // 获取微信授权的code

                    if ($code && session('code') && session('code') != $code) {
                        session()->put('code', $code);

                        myLog('code_response', ['code' => $code]);

                        $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.config('pay.wechat.app_id').'&secret='.config('pay.wechat.secret').'&code='.$code.'&grant_type=authorization_code';
                        $client = new Client();

                        $response = $client->request('post', $url, [
                            'multipart' => [],
                        ]);

                        $result = $response->getBody()->getContents();

                        $result = json_decode($result, true);

                        myLog('user_response', ['user' => $result]);

                        if (isset($result['openid']) && $result['openid']) {
                            session()->put('open_id', $result['openid']);
                            myLog('openid_response', ['openid' => $result['openid'], 'session' => session('open_id')]);

                            return view('vue');
                        } else {
                            throw new \Exception('openid 获取失败！');
                        }
                    } else {
                        // 静默授权，跳转获取 code
                        $url = sprintf("https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=snsapi_base#wechat_redirect",
                            config('pay.wechat.app_id'), urlencode('http://'.config('app.h5_domain') . '/h5/callback'));

                        Header("Location: $url");

                        exit();
                    }
                } else {
                    return view('vue');
                }
            }

            //判断是不是支付宝
            if (strpos($_SERVER['HTTP_USER_AGENT'], 'AlipayClient') !== false) {
                return view('vue');
            }
        } catch (\Exception $e) {
            myLog('error_data', ['data' => $e->getMessage()]);
        }
    }
}
