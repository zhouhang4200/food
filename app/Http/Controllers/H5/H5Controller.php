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
            if (! session('app_id')) {
                $code = $request->input('code', ''); // 获取微信授权的code

                if ($code) {
                    myLog('code_response', ['code' => $code]);

                    $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.config('pay.wechat.app_id').'&secret='.config('pay.wechat.secret').'&code='.$code.'&grant_type=authorization_code';
                    $client = new Client();

                    $response = $client->request('get', $url, [
                        'multipart' => [],
                    ]);

                    $result = $response->getBody()->getContents();

                    $result = json_decode($result, true);

                    if (isset($result['openid']) && $result['openid']) {
                        session('open_id', $result['openid']);
                    } else {
                        throw new \Exception('openid 获取失败！');
                    }

                    myLog('user_response', ['user' => $result]);

                    return view('vue');
                } else {
                    // 静默授权，跳转获取 code
                    $url = sprintf("https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=snsapi_base#wechat_redirect",
                        config('pay.wechat.app_id'), urlencode('http://'.config('app.h5_domain') . '/h5/callback'));
                    Header("Location: $url");
                }
            } else {
                return view('vue');
            }
        } catch (\Exception $e) {
            myLog('error_data', ['data' => $e->getMessage()]);
        }
    }
}
