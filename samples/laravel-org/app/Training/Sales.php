<?php

namespace App\Training;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Sales extends Model
{
    protected $table = 'sales';

    protected $guarded = ['id',];

    protected $fillable = [
        'date', 'customer_id', 'price',
    ];

    /*
     * @return 0:{YM:"2018-01", price:"100000"}
     * */
    public function getBarChartData($query)
    {
        $startDate = $query['rangeStart']['year'] . "-" . $query['rangeStart']['month'] . "-" . $query['rangeStart']['day'];
        $endDate = $query['rangeEnd']['year'] . "-" . $query['rangeEnd']['month'] . "-" . $query['rangeEnd']['day'];

        $startDateCarbon = Carbon::parse($startDate)->startOfDay(); // 2019-01-01 00:00:00:00
        $endDateCarbon = Carbon::parse($endDate)->endOfDay(); //2019-01-01 23:59:59:59

        $data = DB::table('sales')
            ->select(DB::raw("DATE_FORMAT(date,'%Y%m') as YM, sum(price) as price"))
            ->where('date','>',$startDateCarbon)
            ->where('date','<', $endDateCarbon)
            ->groupBy(DB::raw("DATE_FORMAT(date,'%Y%m')"))
            ->get();

        return $data;
    }
}
