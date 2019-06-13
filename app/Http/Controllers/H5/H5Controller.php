<?php

namespace App\Http\Controllers\H5;

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
        $client = new Client();

        $response = $client->request('post', 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='.config('wechat.base_url.app_id').'&redirect_uri='.config('wechat.base_url.callback_url').'&response_type=code&scope=SCOPE&state=STATE', [
            'multipart' => [],
        ]);

        $result = $response->getBody()->getContents();

        myLog('code_response', ['result' => $result]);
    }

    public function callback()
    {
        myLog('callback_response', ['result' => 'success']);
    }
}
