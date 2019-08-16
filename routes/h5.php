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

// 首页，去除路由中的*号
Route::get('/{vue?}', 'H5Controller@index')->where('vue', '[\/\w\.-]*')->where('vue', '^(?!socket$).*$');

// 所有的h5扫码路由在此
Route::post('/dish/list', 'OrderController@dishList');
Route::post('/category/list', 'CategoryController@list');
Route::post('/category/banner', 'CategoryController@banner');
Route::post('/customer/detail', 'OrderController@customerDishDetail');
Route::post('/pay', 'OrderController@pay');
Route::post('/alipay/notify', 'OrderController@alipayNotify');
Route::post('/alipay/return', 'OrderController@alipayReturn');

Route::post('/wechat/notify', 'OrderController@wechatNotify');
Route::post('/wechat/return', 'OrderController@wechatReturn');
// 获取 open_id
Route::post('/openid', 'H5ControllerController@getOpenId'); // 获取code回调地址
