<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddKeyToMonster extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('monster', function (Blueprint $table) {
            $table->unsignedBigInteger('category_id')->nullable();
            $table->unsignedBigInteger('level_id')->nullable();
            $table->foreign('category_id')->references('id')->on('category')->onDelete('Cascade');
            $table->foreign('level_id')->references('id')->on('level')->onDelete('Cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('monster', function (Blueprint $table) {
            $table->dropForeign('lists_category_id_foreign');
            $table->dropColumn('category_id');
            $table->dropForeign('lists_level_id_foreign');
            $table->dropColumn('level_id');
        });
    }
}