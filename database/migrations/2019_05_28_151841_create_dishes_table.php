<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDishesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dishes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('merchant_id')->comment('商户id');
            $table->string('name')->comment('菜名');
            $table->tinyInteger('category_id')->comment('分类');
            $table->string('tag')->default('')->comment('口味标记');
            $table->decimal('amount', 10, 2)->comment('单价：元');
            $table->decimal('original_amount', 10, 2)->comment('原单价：元');
            $table->integer('rate')->default(100)->comment('折扣：默认100');
            $table->string('logo')->comment('菜单图片');
            $table->string('material')->default('暂无')->comment('配料');
            $table->string('intro', 500)->default('暂无')->comment('简介');
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
        Schema::dropIfExists('dishes');
    }
}
