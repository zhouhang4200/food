<?php

namespace App\Http\Controllers\Auth;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    /**
     * 获取微信code回调地址
     *
     * @param Request $request
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function wechatCodeCallback(Request $request)
    {
        try {
            $code = $request->input('code'); // 第二次会带上code

            $original_url = urldecode($request->input('original_url')); // 要跳转的点菜地址

            myLog('callback_first', ['code' => $code, 'original_url' => $original_url]);

            if ($code) {  // 存在 code  则去找 openid
                myLog('callback_second', ['code' => $code, 'original_url' => $original_url]);
                $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.config('pay.wechat.app_id').'&secret='.config('pay.wechat.secret').'&code='.$code.'&grant_type=authorization_code';

                $client = new Client();

                $response = $client->request('post', $url, [
                    'multipart' => [],
                ]);

                $result = $response->getBody()->getContents();

                $result = json_decode($result, true);

                if (isset($result['openid']) && $result['openid']) {
                    $original_url = $original_url."&open_id=".$result['openid'];

                    myLog('callback_third', ['code' => $code, 'original_url' => $original_url, 'openid' => $result['openid']]);

                    Header("Location: $original_url"); // 拿到opendi拼到地址后面，跳转到点菜页面
                } else {
                    myLog('callback_no_openid', ['data' => 'openid获取失败']);
                }
            }

            myLog('callback_no_code', ['code' => $code, 'original_url' => $original_url]);
        } catch (\Exception $e) {
            myLog('callback_error', ['data' => $e->getMessage()]);
        }
    }

    public function alipayReturn()
    {
        myLog('alipay_return', ['data' => 'success']);

        return view('welcome');
    }
}
