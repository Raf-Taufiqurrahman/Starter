<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Apps\RoleController;
use App\Http\Controllers\Apps\UserController;
use App\Http\Controllers\Apps\DashboardController;
use App\Http\Controllers\Apps\PermissionController;

Route::get('/', function () {
   if(auth()->check()) {
        return to_route('apps.dashboard');
    }
    return inertia('auth/login');
});

Route::group(['prefix' => 'apps', 'as' => 'apps.', 'middleware' => ['auth']], function(){
    // dashboard route
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    // permission route
    Route::resource('/permissions', PermissionController::class)->only(['index', 'store', 'update', 'destroy']);
    // role route
    Route::resource('/roles', RoleController::class)->except('show');
    // user route
    Route::put('/users/{user}/status', [UserController::class, 'status'])->name('users.status');
    Route::resource('/users', UserController::class);
});

require __DIR__.'/auth.php';
