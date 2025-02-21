<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $role = Role::create(['name' => 'super-admin']);

        $user = User::create([
            'username' => 'admin',
            'name' => 'administrator',
            'email' => 'admin@dev.com',
            'password' => bcrypt('password')
        ]);

        $user->assignRole($role);
    }
}
