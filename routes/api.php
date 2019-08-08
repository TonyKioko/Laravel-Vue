<?php

use Illuminate\Http\Request;


Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function(){
    Route::get('/user', function( Request $request ){
      return $request->user();
    });
    Route::get('/cafes', 'API\CafesController@getCafes');

    Route::post('/cafes', 'API\CafesController@postNewCafe');

    Route::get('/cafes/{id}', 'API\CafesController@getCafe');



});
