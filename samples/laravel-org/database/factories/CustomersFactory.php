<?php

use Faker\Generator as Faker;

$factory->define(\App\Training\Customer::class, function (Faker $faker) {
    return [
        'name'   => $faker->name,
        'prof_img'   => $faker->numberBetween($min=1, $max=100),
        'created_at' => time(),
        'updated_at' => time(),
    ];
});