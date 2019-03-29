<?php

use Faker\Generator as Faker;

$factory->define(\App\Training\Employee::class, function (Faker $faker) {
    return [
        'fullname'   => $faker->name,
        'empcode'    => $faker->numberBetween($min = 1, $max = 50),
        'mobile'     => $faker->numberBetween($min = 40000, $max = 100000),
        'position'   => $faker->realText($maxNbChars = 20, $indexSize = 1),
        'created_at' => time(),
        'updated_at' => time(),
    ];
});