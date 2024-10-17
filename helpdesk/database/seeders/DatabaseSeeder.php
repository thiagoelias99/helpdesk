<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Priority;
use App\Models\Status;
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

        UserLevel::factory()->create(['level' => 'admin',]);
        UserLevel::factory()->create(['level' => 'user',]);
        UserLevel::factory()->create(['level' => 'technician',]);

        Status::factory()->create(['status' => 'open']);
        Status::factory()->create(['status' => 'in_progress']);
        Status::factory()->create(['status' => 'scheduled']);
        Status::factory()->create(['status' => 'resolved']);
        Status::factory()->create(['status' => 'closed']);

        Category::factory()->create(['category' => 'hardware']);
        Category::factory()->create(['category' => 'software']);
        Category::factory()->create(['category' => 'network']);
        Category::factory()->create(['category' => 'security']);
        Category::factory()->create(['category' => 'other']);

        Priority::factory()->create(['priority' => 'low']);
        Priority::factory()->create(['priority' => 'medium']);
        Priority::factory()->create(['priority' => 'high']);
        Priority::factory()->create(['priority' => 'urgent']);
    }
}
