<?php

namespace App\Training;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = ['name', 'prof_img',];

    protected $table = 'customers';
}
