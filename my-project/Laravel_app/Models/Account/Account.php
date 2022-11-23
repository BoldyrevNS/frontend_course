<?php

namespace App\Models\Account;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $table = 'acc';

    protected $fillable = [
        'id',
        'login',
        'pass',
        'mail'
    ];

    protected $casts = [

    ];
}
