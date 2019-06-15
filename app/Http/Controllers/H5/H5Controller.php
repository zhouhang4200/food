<?php

namespace App\Http\Controllers\H5;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cookie;

class H5Controller extends Controller
{
    /**
     * vue 入口
     *
     * @param Request $request
     * @param $vue
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Exception
     */
    function index(Request $request, $vue)
    {
        try {
//            $query = $request->getQueryString();
//            $original_url = 'http://'.config('app.h5_domain').'/h5/'.$vue.'?'.$query;
//            dd($original_url);

//            die;Header("Location: http://www.baidu.com");
            // 获取网站query后缀
            $query = $request->getQueryString();
            myLog('start', ['query' => $query, 'vue' => $vue, 'url' => $request->fullUrl()]);
//            dd($request->getQueryString());
//            dd(parse_url($request->fullUrl()));
            // 判断当前路由是不是下单选菜页面
            if ($vue == 'order') {
                if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false) { //判断是不是微信
                    myLog('second-wechat', ['query' => $query, 'vue' => $vue]);

                    if (! $request->input('open_id')) { // 不存在openid
                        // 静默授权，跳转获取 code
                        $original_url = urlencode('http://'.config('app.h5_domain').'/h5/'.$vue.'?'.$query);

                        myLog('three-no-openid', ['original_url' => $original_url, 'vue' => $vue]);

                        $url = sprintf("https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=snsapi_base#wechat_redirect",
                            config('pay.wechat.app_id'), urlencode('http://'.config('app.h5_domain') . '/auth/wechat/code/callback?original_url='.$original_url));

                        Header("Location: $url");

                        exit();
                    } else { // 存在oepnid 则让通行
                        myLog('three-have-openid', ['query' => $query, 'vue' => $vue, 'url' => $request->fullUrl()]);

                        return view('vue');
                    }
                } elseif (strpos($_SERVER['HTTP_USER_AGENT'], 'AlipayClient') !== false) { // 支付宝
                    myLog('second-alipay', ['query' => $query, 'vue' => $vue]);
                    return view('vue');
                } else { // 都不是
                    myLog('second-none', ['query' => $query, 'vue' => $vue]);
                    return view('vue');
                }
            } else {
                return view('vue');
            }
        } catch (\Exception $e) {
            myLog('error_data', ['data' => $e->getMessage()]);
        }
    }

    public function getOpenId(Request $request)
    {
        try {
            if (! session('open_id')) {
                $code = $request->input('code', ''); // 获取微信授权的code

                if ($code) {
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

                        return response()->json(['status' => 1, 'data' => $result['openid']]);
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
            }
            return response()->json(['status' => 1, 'data' => session('open_id')]);
        } catch (\Exception $e) {
            return response()->json(['status' => 0, 'data' => '']);
        }
    }
}
