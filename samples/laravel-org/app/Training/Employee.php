<?php

namespace App\Training;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['fullname', 'empcode', 'mobile', 'position'];

    protected $table = 'employees';

    public function getEmployees(){
        $employees = Employee::all();

        return $employees;
    }
}
