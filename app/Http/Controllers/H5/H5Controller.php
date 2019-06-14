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
        return view('vue');
    }

    public static function getCode()
    {
        try {
            $config = [
                'app_id' => config('pay.wechat.app_id'),
                'scope'  => 'snsapi_base',
                'oauth' => [
                    'scopes'   => ['snsapi_base'],
                    'response_type' => 'code',
                    'callback' => config('app.h5_domain').'/h5/callback',
                ],
            ];

            $app = new Application($config);
            $oauth = $app->oauth->redirect()->send();

            myLog('code_response', ['data' => $oauth]);

            return $oauth;
        } catch (\Exception $e) {
            myLog('code_error', ['data' => '['.$e->getLine().']'.$e->getMessage()]);
        }
    }

    public function callback()
    {
        myLog('callback_response', ['result' => 'success']);
    }
}
