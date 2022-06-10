<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\AdminsController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\UtilitiesController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// User Routes
// Users can Signup, Sign in, Sign out, refresh their Users token, view profile, and write a feedback (Review and Like)
Route::group(['prefix'=>'v1'], function(){
    Route::group(['prefix'=>'User'], function(){
        Route::group(['middleware' => 'api'], function($router) {
            Route::POST('/Register', [UsersController::class, 'register']);
            Route::POST('/Login', [UsersController::class, 'login'])->name("Log-in");
            Route::POST('/Logout', [UsersController::class, 'logout']);
            Route::POST('/Refresh', [UsersController::class, 'refresh']);
        });
        Route::group(['middleware' => 'role.user'], function() {            
            Route::GET('/Profile', [UsersController::class, 'profile']); 
            Route::POST('/Feedback', [UsersController::class, 'feedback']);
        });
    });
    
    // Admin Routes
    // Admins can upload an item, edit existing item, display existing users (optional), and monitor reviews (optional).
    Route::group(['prefix' => 'Admin'], function(){
        Route::POST("/Login", [AdminsController::class, "login"])->name("Log-in");
            Route::group(['middleware' => 'role.admin'], function(){    
                Route::POST("/CreateAdmin", [AdminsController::class, "register"])->name("Create-admin");
                Route::POST("/AddItem", [AdminsController::class, "addItem"])->name("Add-item");
                Route::POST("/EditItem/{id}", [AdminsController::class, "editItem"])->name("Edit-item");
                Route::GET("/DisplayUsers", [AdminsController::class, "displayUsers"])->name("Display-users");
                Route::GET("/MonitorReviews", [AdminsController::class, "monitorReviews"])->name("Monitor-reviews");
            });
    });

    // Item Routes
    // Items can be displayed as a whole and as a single item, and sorted by their category.
    Route::group(['prefix' => 'Items'], function(){
        Route::GET("/AllItems", [ItemsController::class, "displayAll"])->name("Display-all");
        Route::GET("/Item/{name}", [ItemsController::class, "displayItem"])->name("Display-item");
        Route::GET("/ItemsCat/{category}", [ItemsController::class, "displayCat"])->name("Display-cat");
    });

    // Utility Routes
    Route::GET("/Not-found", [UtilitiesController::class, "notFound"])->name("not-found");
});