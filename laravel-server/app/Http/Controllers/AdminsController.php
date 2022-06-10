<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\User;
use App\Models\Feedback;

class AdminsController extends Controller
{
    public function addItem(Request $request){
        $check = Item::where("name","=",$request->name)->get();
        if($check != "[]"){
            $status = "Failed";
            return $status;
        }else{
            $item = new Item;
            $item -> name = $request -> name;
            $item -> description = $request -> description;
            $item -> image = $request -> image;
            $item -> price = $request -> price;
            $item -> in_stock = $request -> in_stock;
            $item -> stock_quantity = $request -> stock_quantity;
            $item->save();
            return response()->json([
                "status" => "Success",
            ], 200);
        }
    }
    
    public function edititem(Request $request, $id){
        $item = Item::find($id);
        if($item){
            $item ->name = $request -> new_name;
            $item ->description = $request -> new_description;
            $item ->location = $request ->new_location;
            $item ->image = $request -> new_image;
            $item ->price = $request -> new_price;
            $item ->in_stock = $request -> new_in_stock;
            $item ->stock_quantity = $request ->new_stock_quantity;
            $item->save();
            $status = "success";
            return $status;
        }
        else{
            $status = "Failed";
            return $status;
        }
    }
}
