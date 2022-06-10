<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model{
    
    use HasFactory;

    //Inverse M:1 with Users
    public function users(){
        return $this->belongsTo(User::class);
    }

    //Inverse M:1 with Items
    public function items(){
        return $this->belongsTo(Item::class);
    }

}
