<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("coaches", function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->integer("years_of_experience")->default(0); // Years of experience
            $table->decimal("hourly_rate", 8, 2); // Hourly rate (up to 999999.99)
            $table->string("country");
            $table->string("city");
            $table->date("date_joined"); // Date the coach joined SuperSpin
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("coaches");
    }
};
