<?php

use Faker\Generator as Faker;

$factory->define(\App\Training\Sales::class, function (Faker $faker) {
    return [
        'date'        => $faker->date('Y-m-d', $max = 'now'),
        'customer_id' => $faker->numberBetween($min = 1, $max = 50),
        'price'       => $faker->numberBetween($min = 40000, $max = 100000),
        'created_at' => time(),
        'updated_at' => time(),
    ];
});
