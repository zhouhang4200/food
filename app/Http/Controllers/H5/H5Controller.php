<?php

namespace App\Http\Controllers\H5;

use EasyWeChat\Work\Application;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class H5Controller extends Controller
{
    function index()
    {
        H5Controller::getCode();

        return view('vue');
    }

    public static function getCode()
    {
        try {
            // 静默授权，跳转获取 code
            $url = sprintf("https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=snsapi_base#wechat_redirect",
                config('pay.wechat.app_id'), urlencode(config('app.h5_domain') . '/h5/callback'));
            $result = redirect($url);

            myLog('code_response', ['data' => $result]);

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

    public function callback()
    {
        myLog('callback_response', ['result' => 'success']);
    }
}
