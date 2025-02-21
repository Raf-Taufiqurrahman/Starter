<?php

use App\Http\Controllers\Apps\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
   if(auth()->check()) {
        return to_route('apps.dashboard');
    }
    return inertia('auth/login');
});

Route::group(['prefix' => 'apps', 'as' => 'apps.', 'middleware' => ['auth']], function(){
    // dashboard route
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});

require __DIR__.'/auth.php';
