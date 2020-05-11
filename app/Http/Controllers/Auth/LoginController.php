<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Merchant;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/dish/list';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * 设置以username登录
     * @return string
     */
    public function username()
    {
        return 'phone';
    }

    /**
     * Handle a login request to the application.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {
        try {
            // 对前端转输数据进行解密
            $request->password = clientRSADecrypt($request->password);

            $merchant = Merchant::where('phone', $request->phone)->first();

            if (!$merchant)
                return response()->json(['status' => 0, 'message' => '账号已被禁用', 'data' => '']);

            if (! Hash::check($request->password, $merchant->password))
                return response()->json(['status' => 0, 'message' => '密码错误', 'data' => '']);

            if ($merchant->status == 0)
                return response()->json(['status' => 0, 'message' => '账号已被禁用', 'data' => '']);


            // If the class is using the ThrottlesLogins trait, we can automatically throttle
            // the login attempts for this application. We'll key this by the username and
            // the IP address of the client making these requests into this application.
            if ($this->hasTooManyLoginAttempts($request)) {
                $this->fireLockoutEvent($request);

                return $this->sendLockoutResponse($request);
            }

            if ($this->attemptLogin($request)) {
                if ($this->sendLoginResponse($request)) {
                    return response()->json(['status' => 1, 'data' => $merchant->name]);
                }
            }
            // If the login attempt was unsuccessful we will increment the number of attempts
            // to login and redirect the user back to the login form. Of course, when this
            // user surpasses their maximum number of attempts they will get locked out.
            $this->incrementLoginAttempts($request);

            return response()->json(['status' => 0, 'message' => '未知错误', 'data' => '']);
        } catch (\Exception $e) {
            myLog('login', $e->getMessage());

            return response()->json(['status' => 0, 'message' => '服务器错误', 'data' => '']);
        }
    }

    /**
     * 登录后更改用户是否在线字段
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $merchant
     * @return mixed
     */
    protected function authenticated(Request $request, $merchant)
    {
//        User::where('id', Auth::user()->id)->update(['online' => 1]);

//        $merchant = Auth::user();
//        $redis = RedisConnect::session();
//        $sessionId = $redis->get(config('redis.user')['loginSession'] . $merchant->id);
//
//        if ($sessionId) {
//            $redis->del($sessionId);
//            $redis->del($redis->get(config('redis.user')['loginSession'] . $merchant->id));
//        }
//        $redis->set(config('redis.user')['loginSession'] . $merchant->id, session()->getId());
//
//        session()->flash('notice', 'yes');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function logout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->forget($this->guard()->getName());

        $request->session()->regenerate();

        return redirect('/login');
    }

    /**
     * $this->authenticated($request, $this->guard()->user()) ? :
     * @param Request $request
     * @return bool
     */
    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        return $this->authenticated($request, $this->guard()->user()) ? : true;
    }
}
