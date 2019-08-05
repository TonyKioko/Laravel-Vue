<?php

Route::get( '/', 'Web\AppController@getApp' )
      ->middleware('auth');
