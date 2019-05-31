<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/api/name', function () {
////    return view('welcome');
//    return response()->json(['staus' => 1, 'data' => 'yes']);
//});

Route::get('/{vue?}', 'Vue\VueController@index')->where('vue', '[\/\w\.-]*')->where('vue', '^(?!socket$).*$');

Route::namespace('Auth')->group(function () {
    // 登录
    Route::get('/login', 'LoginController@login')->name('login');
    Route::post('/login', 'LoginController@login');
    Route::post('/logout', 'LoginController@logout')->name('logout');
    // 注册
    Route::post('/register', 'RegisterController@register');
    // 密码找回
    Route::get('/password/reset', 'ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('/password/email', 'ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('/password/reset/{token}', 'ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('/password/reset', 'ResetPasswordController@reset');
});

Route::namespace('Vue')->group(function () {
    Route::middleware(['auth'])->group(function () {
        // 图片上传
        Route::post('/upload/image', 'ServiceController@uploadImage');
        // 获取所有的分类
        Route::post('/category', 'ServiceController@category');
        // 菜单
        Route::prefix('dish')->group(function () {
            Route::post('list', 'DishController@list'); // 列表
            Route::post('add', 'DishController@add'); // 添加
            Route::post('update', 'DishController@update'); // 编辑
            Route::post('delete', 'DishController@delete'); // 删除
        });
    });
});
