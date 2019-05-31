<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

// 自带一个api中间件
Route::namespace('V1')->prefix('v1')->group(function () {
    // 登录
//    Route::post('login', 'LoginController@login');
//    Route::post('register', 'RegisterController@register');

//    Route::middleware(['auth'])->prefix('dish')->group(function () {
//        Route::post('list', 'DishController@list');
//    });
});
