<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    public function run()
    {
        // Добавляем нового пользователя
        User::create([
            'name' => 'Пользователь',
            'email' => 'user@ya.ru',
            'password' => Hash::make('321!'),
        ]);
    }
}
