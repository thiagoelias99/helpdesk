<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\UserLevel;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        UserLevel::factory()->create([
            'level' => 'admin',
        ]);
        UserLevel::factory()->create([
            'level' => 'user',
        ]);
        UserLevel::factory()->create([
            'level' => 'technician',
        ]);
    }
}
