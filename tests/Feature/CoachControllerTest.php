<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Coach;

class CoachControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_returns_a_list_of_coaches()
    {
        // Arrange: Create some test coaches
        Coach::factory()->count(15)->create();

        // Act: Send a GET request to the index endpoint
        $response = $this->getJson(route("coaches.index"));

        // Assert: Check the response status and structure
        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                "current_page",
                "data",
                "first_page_url",
                "from",
                "last_page",
                "last_page_url",
                "links",
                "next_page_url",
                "path",
                "per_page",
                "prev_page_url",
                "to",
                "total",
            ])
            ->assertJsonCount(12, "data"); // Default pagination count
    }

    /** @test */
    public function it_returns_an_empty_response_when_no_coaches_exist()
    {
        // Act: Make a GET request to the index endpoint
        $response = $this->getJson(route("coaches.index"));

        // Assert: Check the response status and that data is empty
        $response
            ->assertStatus(200)
            ->assertJsonFragment(["data" => []]) // Ensure data is empty
            ->assertJsonPath("total", 0); // Ensure total is 0
    }

    /** @test */
    public function it_allows_searching_by_name_city_or_country()
    {
        // Arrange: Create specific coaches
        Coach::factory()->create([
            "name" => "João Alfacinha",
            "city" => "Lisbon",
            "country" => "Portugal",
        ]);
        Coach::factory()->create([
            "name" => "Pedro Tripeiro",
            "city" => "Porto",
            "country" => "Portugal",
        ]);
        Coach::factory()->create([
            "name" => "Juan Garcia",
            "city" => "Madrid",
            "country" => "Spain",
        ]);

        // Act & Assert: Search by name
        $response = $this->getJson(
            route("coaches.index", ["search" => "Pedro"])
        );
        $response
            ->assertStatus(200)
            ->assertJsonCount(1, "data")
            ->assertJsonFragment(["name" => "Pedro Tripeiro"]);

        // Act & Assert: Search by city
        $response = $this->getJson(
            route("coaches.index", ["search" => "Lisbon"])
        );
        $response
            ->assertStatus(200)
            ->assertJsonCount(1, "data")
            ->assertJsonFragment(["city" => "Lisbon"]);

        // Act & Assert: Search by country
        $response = $this->getJson(
            route("coaches.index", ["search" => "Spain"])
        );
        $response
            ->assertStatus(200)
            ->assertJsonCount(1, "data")
            ->assertJsonFragment(["country" => "Spain"]);
    }

    /** @test */
    public function it_allows_sorting_by_hourly_rate()
    {
        // Arrange: Create coaches with different hourly rates
        Coach::factory()->create(["hourly_rate" => 100]);
        Coach::factory()->create(["hourly_rate" => 50]);
        Coach::factory()->create(["hourly_rate" => 75]);

        // Act: Sort by hourly rate ascending
        $responseAsc = $this->getJson(
            route("coaches.index", ["sort" => "asc"])
        );

        // Assert: Check the order of hourly rates in ascending order
        $responseAsc
            ->assertStatus(200)
            ->assertSeeInOrder([50, 75, 100]);

        // Act: Sort by hourly rate descending
        $responseDesc = $this->getJson(
            route("coaches.index", ["sort" => "desc"])
        );

        // Assert: Check the order of hourly rates in descending order
        $responseDesc
            ->assertStatus(200)
            ->assertSeeInOrder([100, 75, 50]);

        // Act: Provide an invalid sort parameter
        $responseInvalid = $this->getJson(
            route("coaches.index", ["sort" => "invalid"])
        );

        // Assert: Ensure no specific sorting is applied (order remains as created)
        $responseInvalid->assertStatus(200);

        // Extract the hourly rates from the response to validate they match the creation order
        $rates = $responseInvalid->json("data.*.hourly_rate");
        $this->assertEquals([100, 50, 75], $rates);
    }

    /** @test */
    public function it_returns_an_empty_response_when_paginating_beyond_available_records()
    {
        // Arrange: Create some test coaches
        Coach::factory()->count(5)->create(); // Only 5 records exist

        // Act: Request a non-existent page
        $response = $this->getJson(route("coaches.index", ["page" => 10])); // Page 10 exceeds available records

        // Assert: Check the response is empty but valid
        $response
            ->assertStatus(200)
            ->assertJsonFragment(["data" => []]) // No data on this page
            ->assertJsonPath("current_page", 10) // Confirm the requested page is shown
            ->assertJsonPath("total", 5); // Total records in the database
    }
}
