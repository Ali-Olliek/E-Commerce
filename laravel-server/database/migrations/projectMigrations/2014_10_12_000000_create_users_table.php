<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Database\Migrations\A_2014_10_12_000000_create_users_table;

return new class extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){   
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->text('image')->nullabe(); // Base64 image
            $table->bigInteger('feedback_id')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
