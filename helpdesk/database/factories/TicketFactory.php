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
            "title" => fake()->sentence(),
            "description" => fake()->paragraph(),
            "user_id" => fake()->numberBetween(1, 10),
            "technician_id" => fake()->numberBetween(1, 10),
            "category" => fake()->randomElement(['hardware', 'software', 'network', "security", 'other']),
            "priority" => fake()->randomElement(['low', 'medium', 'high', 'urgent']),
            "status" => fake()->randomElement(['open', 'in_progress', 'scheduled', 'resolved', 'closed']),
            "created_at" => fake()->dateTimeBetween("-3 day"),
        ];
    }
}
