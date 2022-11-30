<?php

namespace App\Models\Hero;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    protected $table = 'hero';

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
        'user_id'
    ];
}