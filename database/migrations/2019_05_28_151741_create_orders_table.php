<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('trade_no')->comment('内部订单号');
            $table->string('out_trade_no')->comment('外部订单号');
            $table->date('date')->comment('日期');
            $table->tinyInteger('status')->comment('支付装备：默认0未支付 1支付成功 2支付失败');
            $table->tinyInteger('channel')->comment('支付渠道： 1支付宝 2微信');
            $table->string('buyer_id')->comment('支付人id');
            $table->string('buyer_open_id')->comment('支付人open_id');
            $table->decimal('amount', 10, 2)->comment('实际支付金额');
            $table->decimal('original_amount', 10, 2)->comment('原始金额');
            $table->string('detail')->comment('详情');
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
        Schema::dropIfExists('orders');
    }
}
