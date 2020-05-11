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
        Response::macro('ajaxFail', function ($code = 10000) {
            return response()->json(['code' => $code, 'message' => config('data.error_code.' . $code), 'data' => null]);
        });
        Response::macro('ajaxSuccess', function ($data = null) {
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
