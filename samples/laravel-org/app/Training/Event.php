<?php

namespace App\Training;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Event extends Model
{
    protected $fillable = ['title', 'content', 'customer_id', 'employee_id', 'start', 'end', 'entry_time'];

    protected $table = 'events';

    public function getEvents(){
        $db = DB::table('events');
        $events = $db
            ->orderBy('start', 'desc')->get();

        return $events;
    }

    public function customer()
    {
        return $this->hasOne('App\Training\Customer', 'customer_id', 'id');
    }
}
