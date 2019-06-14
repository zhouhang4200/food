<?php

namespace App\Http\Controllers\H5;

use EasyWeChat\Work\Application;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class H5Controller extends Controller
{
    function index(Request $request)
    {
        $code = $request->input('code', ''); // 获取微信授权的code

        if ($code) {
            myLog('code_response', ['code' => $code]);

            $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.config('pay.wechat.app_id').'&secret='.config('pay.wechat.secret').'&code='.$code.'&grant_type=authorization_code';
            $client = new Client();

            $response = $client->request('get', $url, [
                'multipart' => [],
            ]);

            $result = $response->getBody()->getContents();

            $result = json_decode($result);


            myLog('user_response', ['user' => $result]);
        } else {
            // 静默授权，跳转获取 code
            $url = sprintf("https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=snsapi_base#wechat_redirect",
                config('pay.wechat.app_id'), urlencode('http://'.config('app.h5_domain') . '/h5/callback'));
            Header("Location: $url");
        }

        return view('vue');
    }

    public static function getCode()
    {
        try {
            // 静默授权，跳转获取 code
            $url = sprintf("https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=snsapi_base#wechat_redirect",
                config('pay.wechat.app_id'), urlencode('http://'.config('app.h5_domain') . '/h5/callback'));
            Header("Location: $url");
//            exit();
//            $result = redirect($url);

//            myLog('code_response', ['data' => $result]);

//            $config = [
//                'app_id' => config('pay.wechat.app_id'),
//                'scope'  => 'snsapi_base',
//                'oauth'  => [
//                    'scopes'        => ['snsapi_base'],
//                    'response_type' => 'code',
//                    'callback'      => config('app.h5_domain') . '/h5/callback',
//                ],
//            ];
//            myLog('code_config', ['data' => $config]);
//            $app   = new Application($config);
//
//            $oauth = $app->oauth->redirect()->send();
//            myLog('code_app', ['data' => $app->oauth]);
//
//            myLog('code_response', ['data' => $oauth]);
//
//            return $oauth;
        } catch (\Exception $e) {
            myLog('code_error', ['data' => '[' . $e->getLine() . ']' . $e->getMessage()]);
        }
    }

    public function callback(Request $request)
    {
        myLog('callback_response', ['result' => $request->input('code', '')]);
    }
}
