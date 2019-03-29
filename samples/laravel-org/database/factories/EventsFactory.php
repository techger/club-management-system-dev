<?php

use Faker\Generator as Faker;

$factory->define(\App\Training\Event::class, function (Faker $faker) {
    return [
        'title' => $faker->realText($maxNbChars=50, $indexSize=1) ,
        'content' => $faker->realText($maxNbChars=200, $indexSize=2) ,
        'customer_id' => $faker->numberBetween($min=1, $max=100) ,
        'employee_id' => $faker->numberBetween($min=1, $max=100) ,
        'start' => $faker->date('Y-m-d', $max = 'now'),
        'end' => $faker->date('Y-m-d', $max = 'now'),
        'entry_time' => $faker->date('Y-m-d', $max = 'now'),
        'created_at' => time(),
        'updated_at' => time()
    ];
});
