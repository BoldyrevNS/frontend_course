<?php

namespace App\Models\Monster;

use Illuminate\Database\Eloquent\Model;

class Monster extends Model
{
    protected $table = 'monster';

    protected $fillable = [
        'id',
        'name',
        'heat',
        'armor',
        'streight',
        'dexterity',
        'physique',
        'intelligence',
        'wisdom',
        'charisma',
        'description',
        'image',
        'category_id',
        'level_id'
    ];
}