<?php

namespace App\Http\Controllers\Training;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UploadController extends Controller
{
    public function upload(Request $request){

        $request->image->storeAs('training_images', now() . '.jpg');

        return response()->json($request);
    }
}
