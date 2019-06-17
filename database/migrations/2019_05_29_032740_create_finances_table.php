<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFinancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('finances', function (Blueprint $table) {
            $table->increments('id');
            $table->date('date');
            $table->string('order_trade_no')->comment('关联订单号');
            $table->integer('merchant_id')->comment('商户id');
            $table->tinyInteger('type')->comment('流水类型：');
            $table->integer('sub_type')->comment('子流水类型：');
            $table->decimal('amount', 10, 2)->comment('支付金额');
            $table->string('comment', 200)->default('')->comment('备注');
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
        Schema::dropIfExists('finances');
    }
}
