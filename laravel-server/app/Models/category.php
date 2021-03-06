<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model {
    use HasFactory;

    /**Defining Eloquent Model Relationships */

    // Items (1:1)
    public function items(){
        return $this->belongsTo(Item::class);
    }
}
