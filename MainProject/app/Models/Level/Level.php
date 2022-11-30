<?php

namespace App\Models\Level;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    protected $table = 'level';

    protected $fillable = [
        'id',
        'value'
    ];
}