<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('gallery')->group(function () {
    Route::get('list', [\App\Http\Controllers\Gallery\GalleryController::class, 'list']);
});

Route::prefix('profile')->group(function () {
    Route::get('info/{id}', [\App\Http\Controllers\Profile\ProfileController::class, 'info']);
 });

Route::prefix('account')->group(function () {
    Route::get('check_email/{email}', [\App\Http\Controllers\Report\ReportController::class, 'check_email']);
 });