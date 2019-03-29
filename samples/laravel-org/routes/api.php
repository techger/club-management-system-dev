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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Groupってのがミソ。この書き方覚えとき
Route::group([

    //API用のルーティングだよ
    'middleware' => 'api',

    //api/auth/ にするよ
    'prefix'     => 'auth',

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('update', 'AuthController@update');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

// Training用のルーティング。本番は削除
Route::group([
    'middleware' => 'api',
    'prefix'     => 'training',
], function ($router) {
    Route::post('register-employee', 'Training\EmployeeController@register');
    Route::get('employee-list', 'Training\EmployeeController@getEmployees');
    Route::post('update', 'Training\EmployeeController@updateEmployee');
    Route::post('delete', 'Training\EmployeeController@deleteEmployee');
    Route::post('upload', 'Training\UploadController@upload');
    Route::post('bar-chart', 'Training\ChartController@getBarChartData');
    Route::get('event-list', 'Training\EventController@getEventList');
});