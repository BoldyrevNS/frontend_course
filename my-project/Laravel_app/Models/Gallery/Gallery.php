<?php

namespace App\Models\Gallery;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $table = 'gallery';

    protected $fillable = [
        'pic_id',
        'title',
        'author_id',
        'upload_date',
        'descr',
        'tags',
        'pic_format'
    ];

    protected $casts = [

    ];
}
