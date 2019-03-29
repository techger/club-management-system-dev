<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(EmployeesTableSeeder::class);
        $this->call(SalesTableSeeder::class);
        $this->call(CustomersTableSeeder::class);
        $this->call(EventsTableSeeder::class);
    }
}