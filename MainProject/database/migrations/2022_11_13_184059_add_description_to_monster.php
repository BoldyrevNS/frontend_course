<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDescriptionToMonster extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('monster', function (Blueprint $table) {
            $table -> string("description",2500)->default("")->after('charisma')->comment("Описание");
            $table -> decimal("armor", 2, 0, true) -> default(0) -> after('name')->comment("Броня");
            $table -> decimal("heat", 3, 0, true) -> default(1) -> after('name')->comment("Здоровье");
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
            $table -> dropColumn('description');
            $table -> dropColumn('armor');
            $table->dropIndex('lists_category_id_index');
            $table->dropColumn('category_id');
        });
    }
}
