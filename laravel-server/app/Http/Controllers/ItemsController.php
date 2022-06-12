<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\User;
use App\Models\Feedback;

class ItemsController extends Controller {

    // Display Items on Landing Page
    public function displayAll(){
        $items = Item::all();
        return response()->json([
            "status" => "Success",
            "Items" => $items
        ], 200);
    }

    // Display a Single Item (Optional)
    public function displayItem($name){
        $item = Item::where("name", "LIKE", "%$name%")->get();
    
        return response()->json([
            "status" => "Success",
            "Item" => $item
        ], 200);
    }

    // Display Items within a Category
    public function displayCat($category){
        $item = Item::where("category","LIKE", "%$category%")->get();
        
        return response()->json([
            "status" => "Success",
            "Item" => $item
        ], 200);
    }

}
