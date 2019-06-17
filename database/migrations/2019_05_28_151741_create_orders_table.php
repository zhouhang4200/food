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
            $table->date('date')->comment('日期');
            $table->integer('merchant_id')->comment('商户id');
            $table->string('trade_no')->comment('内部订单号');
            $table->string('out_trade_no')->comment('外部订单号');
            $table->tinyInteger('status')->default(0)->comment('订单状态：暂时还未用到，默认0');
            $table->tinyInteger('pay_status')->comment('支付状态：默认0未支付 1支付成功 2支付失败');
            $table->integer('table_id')->comment('桌号');
            $table->integer('seat_id')->comment('座位号');
            $table->timestamp('pay_time')->nullable()->comment('订单支付时间');
            $table->tinyInteger('channel')->default(0)->comment('支付渠道：1微信 2支付宝');
            $table->tinyInteger('channel_name')->default('')->comment('支付渠道名:alipay, wechat');
            $table->string('buyer_id')->default('')->comment('支付人id');
            $table->string('buyer_open_id')->default('')->comment('支付人open_id或app_id');
            $table->decimal('amount', 10, 2)->comment('实际支付金额');
            $table->decimal('original_amount', 10, 2)->comment('原始金额');
            $table->string('detail')->comment('详情');
            $table->text('pay_info')->default('')->comment('支付返回的信息');
            $table->string('comment', 300)->default('')->comment('备注');
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
