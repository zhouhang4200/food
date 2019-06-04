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
            $table->string('open_id')->comment('客户的微信open_id或支付宝open_id');
            $table->tinyInteger('channel')->default(0)->comment('用什么方式扫的桌位二维码，微信：1,支付宝：2，');
            $table->integer('merchant_id');
            $table->integer('dish_id');
            $table->integer('table_id');
            $table->integer('seat_id');
            $table->integer('number');
            $table->string('tag')->default('1')->comment('口味标记：1不辣2微辣3辣');
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
