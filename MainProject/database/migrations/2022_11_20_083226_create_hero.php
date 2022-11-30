<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHero extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hero', function (Blueprint $table) {
            $table->id();
            $table->string("name")->comment("Название");
            $table->decimal("level",2,0,true) ->default(1)->comment("Уровень");
            $table -> decimal("armor", 2, 0, true) -> default(0)->comment("Броня");
            $table -> decimal("heat", 3, 0, true) -> default(1)->comment("Здоровье");
            $table->smallInteger("strenght")->default(1)->comment("Сила");
            $table->smallInteger("dexterity")->default(1)->comment("Ловкость");
            $table->smallInteger("physique")->default(1)->comment("Телосложение");
            $table->smallInteger("intelligence")->default(1)->comment("Интеллект");
            $table->smallInteger("wisdom")->default(1)->comment("Мудрость");
            $table->smallInteger("charisma")->default(1)->comment("Харизма");
            $table -> string("description",2500)->default("")->comment("Описание");
            $table->string("image")->default("https://www.clipartmax.com/png/middle/474-4749661_question-mark-clipart-lime-green-question-mark-clipart-lime-green.png")->comment("Изображение");
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('user')->onDelete('Cascade');

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
        Schema::dropIfExists('hero');
    }
}
