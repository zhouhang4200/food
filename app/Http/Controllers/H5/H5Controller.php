<?php

namespace App\Http\Controllers\H5;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
            $query = $request->getQueryString(); // 获取网站query后缀
            $full_url = $request->fullUrl();
            $openid = $request->input('open_id');

            myLog('index_one', ['query' => $query, 'vue' => $vue, 'url' => $full_url]);

            // 判断当前路由是不是下单选菜页面
            if ($vue == 'order') {
                if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false) { //微信
                    myLog('index_wechat_two', ['query' => $query, 'vue' => $vue, 'url' => $full_url]);

                    if (! $openid) { // 不存在openid
                        // 静默授权，跳转获取 code
                        $original_url = urlencode('http://'.config('app.h5_domain').'/h5/'.$vue.'?'.$query);

                        myLog('index_wechat_three', ['query' => $query, 'original_url' => $original_url, 'vue' => $vue]);

                        $url = sprintf("https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=snsapi_base#wechat_redirect",
                            config('pay.wechat.app_id'), urlencode('http://'.config('app.h5_domain') . '/auth/wechat/code/callback?original_url='.$original_url));

                        Header("Location: $url");

                        exit();
                    } else { // 存在openid 则让通行
                        myLog('index_wechat_four', ['openid' => $openid, 'query' => $query, 'vue' => $vue, 'url' => $full_url]);

                        return view('vue');
                    }
                } elseif (strpos($_SERVER['HTTP_USER_AGENT'], 'AlipayClient') !== false) { // 支付宝
                    myLog('index_ali_two', ['query' => $query, 'vue' => $vue, 'url' => $full_url]);

                    return view('vue');
                } else { // 都不是,暂时测试用
                    myLog('second_none', ['query' => $query, 'vue' => $vue, 'url' => $full_url]);

                    return view('vue');
                }
            } else {
                return view('vue');
            }
        } catch (\Exception $e) {
            myLog('index_error', ['data' => '['.$e->getLine().']'.$e->getMessage()]);
        }
    }
}
