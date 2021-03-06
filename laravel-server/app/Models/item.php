<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model {
    use HasFactory;
    /**Defining Eloquent Model Relationships */
    
    // Likes and Reviews (1:M)
    public function feedbacks(){
        return $this->hasMany(Feedback::class);
    }

    // Categories (1:1)
    public function categories(){
        return $this->hasOne(Category::class);
    }
}
