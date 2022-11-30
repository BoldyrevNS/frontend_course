<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Monster\MonsterController;
use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Level\LevelController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Hero\HeroController;

Route::prefix('monsters')->group(function(){
    Route::get('list', [MonsterController::class, 'list']);
    Route::get('info/{id}', [MonsterController::class, 'info']);
});

Route::prefix('category')->group(function(){
    Route::get('list', [CategoryController::class, 'list']);
    Route::get('info/{id}', [CategoryController::class,'info']);
});

Route::prefix('level')->group(function(){
    Route::get('list', [LevelController::class, 'list']);
    Route::get('info/{id}', [LevelController::class,'info']);
});

Route::prefix('user')->group(function () {
    Route::post('login', [UserController::class, 'login']);
    Route::post('registration', [UserController::class, 'addNewUser']);
    Route::post('logout/{yourToken}', [UserController::class, 'logout']);
});

Route::prefix('hero')->group(function () {
    Route::get('get/{yourToken}', [HeroController::class, 'get']);
    Route::post('update/{yourToken}', [HeroController::class, 'updateUser']);
});





