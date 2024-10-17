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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('technician_id');
            $table->string('category');
            $table->string('priority');
            $table->string('status');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('technician_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('category')->references('category')->on('categories')->onDelete('cascade');
            $table->foreign('priority')->references('priority')->on('priorities')->onDelete('cascade');
            $table->foreign('status')->references('status')->on('statuses')->onDelete('cascade');

            $table->index(['user_id', 'technician_id', 'category', 'status', 'priority']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
