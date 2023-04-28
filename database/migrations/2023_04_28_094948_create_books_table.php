<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->string('author', 255)->default(null);
            $table->text('summary')->default(null);
            $table->string('isbn', 32)->nullable()->default(null);
            $table->string('image',255)->nullable()->default(null);
            $table->integer('pages')->default(0);
            $table->foreignId('category_id')->nullable()->default(null)->constrained()->cascadeOnDelete();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
