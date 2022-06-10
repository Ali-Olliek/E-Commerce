<?php

namespace App\Http\Controllers;

use Validator;

use App\Models\Item;
use App\Models\User;
use App\Models\Feedback;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminsController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $admin = Admin::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);

        return response()->json([
            'message' => 'Admin successfully registered',
            'admin' => $admin
        ], 201);
    }

    public function login(Request $request){
        $admin = Admin::where('email', '=', $request->email)->first();
        $password = Hash::check('password', $admin->password);
        //https://stackoverflow.com/a/25136309/18590539
        return response()->json([
            "status"=>"success",
            "user"=>$admin
        ], 200);
    }

    public function addItem(Request $request){
        $check = Item::where("name","=",$request->name)->get();
        if($check != "[]"){
            $status = "Failed";
            return $status;
        }else{
            $item = new Item;
            $item -> name = $request -> name;
            $item -> description = $request -> description;
            $item -> location = $request -> location;
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

    public function displayUsers(){
        $users = User::all();
        return response()->json([
            "status" => "Success",
            "users" => $users
        ], 200);
    }

    public function monitorReviews(){
        $review = Feedback::all();
        return response()->json([
            "status" => "Success",
            "reviews" => $review
        ], 200);
    }
    
}
