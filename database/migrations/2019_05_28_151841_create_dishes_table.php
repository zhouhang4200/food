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
            $table->string('name')->comment('菜名');
            $table->tinyInteger('category')->comment('分类');
            $table->string('tag')->default('不辣')->comment('口味标记');
            $table->integer('amount')->comment('单价：分');
            $table->integer('original_amount')->comment('原单价：分');
            $table->integer('rate')->default(100)->comment('折扣：默认100');
            $table->string('logo')->comment('菜单图片');
            $table->string('material')->default('')->comment('配料');
            $table->string('intro', 500)->default('')->comment('简介');
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
