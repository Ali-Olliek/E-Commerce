<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController; // Users Controller
use App\Http\Controllers\AdminsController;
use App\Http\Controllers\ItemsController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// User Routes
// Users can Signup, Sign in, Sign out, refresh their JWT token, view profile, and write a feedback (Review and Like)
Route::group(['prefix'=>'v1'], function(){
    Route::group(['prefix'=>'User'], function(){
        Route::group(['middleware' => 'api'], function($router) {
            Route::POST('/register', [JWTController::class, 'register']);
            Route::POST('/login', [JWTController::class, 'login']);
            Route::POST('/logout', [JWTController::class, 'logout']);
            Route::POST('/refresh', [JWTController::class, 'refresh']);
            Route::POST('/profile', [JWTController::class, 'profile']);
            Route::POST('/feedback', [JWTController::class, 'feedback']);
        });
    });
    
    // Admin Routes
    // Admins can upload an item, edit existing item, display existing users (optional), and monitor reviews (optional).
    Route::group(['prefix' => 'Admin'], function(){
        Route::group(['middleware' => 'role.admin'], function(){
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
    Route::GET("/not-found", [UtilitiesController::class, "notFound"])->name("not-found");
});