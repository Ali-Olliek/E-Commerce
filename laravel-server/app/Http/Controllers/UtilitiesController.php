<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UtilitiesController extends Controller
{
    public function notFound(){
        return response()->json([
            "status"=>"success",
            "User"=>"UnAuthorized"
        ]);
    }
}
