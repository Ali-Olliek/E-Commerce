<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Database\Migrations\A_2014_10_12_000000_create_users_table;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->char('name');
            $table->longText('description')->nullable();
            $table->longText('image')->nullable();
            $table->integer('price')->nullable();
            $table->char('location')->nullable();
            $table->char('category')->nullable();
            $table->bigInteger('category_id')->nullable();
            $table->boolean('in_stock')->nullable();
            $table->integer('stock_quantity')->nullable();
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
        Schema::dropIfExists('items');
    }
};
