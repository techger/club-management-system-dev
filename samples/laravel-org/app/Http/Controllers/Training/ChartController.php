<?php

namespace App\Http\Controllers\Training;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Training\Sales;

class ChartController extends Controller
{

    /*
     * @return 0:{YM:"2018-01", price:"100000"}
     * */
    public function getBarChartData(Request $request)
    {
        $query['rangeStart'] = $request->input('rangeStart');
        $query['rangeEnd'] = $request->input('rangeEnd');
        $query['customerId'] = $request->input('customerId');

        $db = new Sales();
        $data = $db->getBarChartData($query);

        return response()->json($data);
    }
}
