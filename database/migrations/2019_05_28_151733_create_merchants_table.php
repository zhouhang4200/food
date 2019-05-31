<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMerchantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('merchants', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('pid')->default(0)->comment('父级id');
            $table->string('name')->comment('店长姓名');
            $table->string('phone')->comment('登陆手机号')->unique();
            $table->string('password')->comment('登陆密码');
            $table->tinyInteger('status')->default(1)->comment('状态:1 正常 0  到期');
            $table->date('date')->comment('状态：注册日期，年费会员用');
            $table->softDeletes();
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
        Schema::dropIfExists('merchants');
    }
}
