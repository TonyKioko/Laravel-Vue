<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cafe extends Model
{
    protected $table = 'cafes';

    public function brewMethods(){
		return $this->belongsToMany( 'App\Models\BrewMethod', 'cafes_brew_methods', 'cafe_id', 'brew_method_id' );
	}
}
