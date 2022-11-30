<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonsterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monster', function (Blueprint $table) {
            $table->id();
            $table->string("name")->comment("Название");
            $table->smallInteger("strenght")->default(1)->comment("Сила");
            $table->smallInteger("dexterity")->default(1)->comment("Ловкость");
            $table->smallInteger("physique")->default(1)->comment("Телосложение");
            $table->smallInteger("intelligence")->default(1)->comment("Интеллект");
            $table->smallInteger("wisdom")->default(1)->comment("Мудрость");
            $table->smallInteger("charisma")->default(1)->comment("Харизма");
            $table->string("image")->default("https://www.clipartmax.com/png/middle/474-4749661_question-mark-clipart-lime-green-question-mark-clipart-lime-green.png")->comment("Изображение");
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
        Schema::dropIfExists('monster');
    }
}


