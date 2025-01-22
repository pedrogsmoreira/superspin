<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Coach>
 */
class CoachFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => $this->faker->name(),
            "years_of_experience" => $this->faker->numberBetween(1, 20), // Random years of experience between 1 and 20
            "hourly_rate" => $this->faker->randomFloat(2, 20, 100), // Random hourly rate between 20.00 and 100.00
            "country" => $this->faker->country(), // Random country
            "city" => $this->faker->city(), // Random city
            "date_joined" => $this->faker->date("Y-m-d", "now"), // Random date up to today
        ];
    }
}
