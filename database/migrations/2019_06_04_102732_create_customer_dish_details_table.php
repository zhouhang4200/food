<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomerDishDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_dish_details', function (Blueprint $table) {
            $table->increments('id');
            $table->string('order_trade_no')->comment('关联订单号');
            $table->integer('merchant_id');
            $table->integer('table_id');
            $table->integer('seat_id');
            $table->integer('dish_id');
            $table->integer('number');
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
        Schema::dropIfExists('customer_dish_details');
    }
}
