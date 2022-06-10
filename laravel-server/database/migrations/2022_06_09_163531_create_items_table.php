<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->char('name');
            $table->longText('description')->unsigned();
            $table->longText('image')->unsigned();
            $table->integer('price')->unsigned();
            $table->char('location')->unsigned();
            $table->boolean('in_stock')->unsigned();            
            $table->foreign('feedback_id')->references('id')->on('feedbacks');            
            $table->foreign('category_id')->references('id')->on('categories');
            $table->integer('stock_quantity')->unsigned();
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
