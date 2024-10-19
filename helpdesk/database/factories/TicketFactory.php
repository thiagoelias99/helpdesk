<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => $this->faker->sentence(),
            "description" => $this->faker->paragraph(),
            "user_id" => $this->faker->numberBetween(1, 10),
            "technician_id" => $this->faker->numberBetween(1, 10),
            "category" => array_rand(array_flip(['hardware', 'software', 'network', "security", 'other'])),
            "priority" => array_rand(array_flip(['low', 'medium', 'high', 'urgent'])),
            "status" => array_rand(array_flip(['open', 'in_progress', 'scheduled', 'resolved', 'closed'])),
            "created_at" => $this->faker->dateTimeBetween("-3 day"),
        ];
    }
}
