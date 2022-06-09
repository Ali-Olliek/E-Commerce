<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model{
    
    use HasFactory;

    public function users(){
        return $this->belongsTo(User::class);
    }

    public function items(){
        return $this->belongsTo(Item::class);
    }

}
