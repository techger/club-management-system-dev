1. modelを準備
`php artisan make:model User`

2. factoryを生成
`php artisan make:factory UserFactory`

`<?php
       
       use Faker\Generator as Faker;
       
       /* @var Illuminate\Database\Eloquent\Factory $factory */
       
       $factory->define(App\Book::class, function (Faker $faker) {
         return [
           'book_name' => $faker->realText($maxNbChars = 20, $indexSize = 1),
           'author' => $faker->name,
           'price' => $faker->numberBetween($min = 600, $max = 4000),
           'stocks' => $faker->numberBetween($min = 1, $max = 100),
           'release_dt' => $faker->dateTime($max = 'now', $timezone = date_default_timezone_get()),
         ];
});`


3. Seederを生成
`php artisan make:seeder UsersTableSeeder`

下記を追記
`public function run()
     {
         factory(\App\User::class, 1000)->create();
     }`
     
4. DatabaseSeeder.phpに追記
`public function run()
     {
         // $this->call(UsersTableSeeder::class);
         $this->call(UsersTableSeeder::class);
         $this->call(SalesTableSeeder::class);
         $this->call(CustomersTableSeeder::class);
     }`
     
5. composer dump-autoloadでクラスの接続などをリフレッシュ

6. シードを実行
`php artisan migrate:refresh --seed`