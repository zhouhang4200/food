<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class ResponseServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Response::macro('apiFail', function ($code = 10001) {
            return response()->json(['code' => $code, 'message' => config('data.error_code.' . $code), 'data' => null]);
        });
        Response::macro('apiSuccess', function ($data = null) {
            return response()->json(['code' => 0, 'message' => '操作成功', 'data' => $data]);
        });
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
