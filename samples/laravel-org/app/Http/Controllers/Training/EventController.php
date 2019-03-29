<?php

namespace App\Http\Controllers\Training;

use App\Training\Event;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EventController extends Controller
{
    /*
     * @return [{"id":1, "title":"text text..", "content":"text...", ...}];
     * */
    public function getEventList()
    {
        $db = new Event();
        $event_list = $db->getEvents();

        return response()->json($event_list, 200);
    }
}
