<?php

use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return view("vanilla");
});

Route::get("/vue", function () {
    return view("vue");
});
