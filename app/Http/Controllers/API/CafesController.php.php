<?php

namespace App\Http\Controllers\API;

use App\Models\Cafe;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests\StoreCafeRequest;
use App\Utilities\GoogleMaps;

class CafesController extends Controller
{
    public function getCafes(){

        $cafes = Cafe::with('brewMethods')->get();
        return response()->json( $cafes );

    }

    public function getCafe( $id ){

        $cafe = Cafe::where('id', '=', $id)
            ->with('brewMethods')
            ->first();
        return response()->json( $cafe );

    }

    public function postNewCafe(StoreCafeRequest $request){

        $coordinates = GoogleMaps::geocodeAddress( $request->get('address'), $request->get('city'), $request->get('state'), $request->get('zip') );

        $cafe = new Cafe();
        $cafe->name     = $request->get('name');
        $cafe->address  = $request->get('address');
        $cafe->city     = $request->get('city');
        $cafe->state    = $request->get('state');
        $cafe->zip      = $request->get('zip');
        $cafe->latitude   = $coordinates['lat'];
        $cafe->longitude  = $coordinates['lng'];
        $cafe->save();

        $brewMethods = $request->get('brew_methods');
        $cafe->brewMethods()->sync( $brewMethods );
        return response()->json($cafe, 201);
    }
}
