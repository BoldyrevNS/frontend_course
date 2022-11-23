<?php

namespace App\Models\Profile;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = 'profile';

    protected $fillable = [
        'id',
        'name',
        'bio',
        'avatar_id'
    ];

    protected $casts = [

    ];
}
