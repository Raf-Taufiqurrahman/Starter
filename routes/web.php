<?php

use App\Http\Controllers\Apps\DashboardController;
use App\Http\Controllers\Apps\PermissionController;
use App\Http\Controllers\Apps\RoleController;
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
    // permission route
    Route::resource('/permissions', PermissionController::class)->only(['index', 'store', 'update', 'destroy']);
    // role route
    Route::resource('/roles', RoleController::class)->except('show');
});

require __DIR__.'/auth.php';
