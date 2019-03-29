<?php

namespace App\Http\Controllers\Training;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Training\Employee;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    public function register()
    {
        $employee = new Employee();
        $employee->fullname = request('fullname');
        $employee->empcode = request('empcode');
        $employee->mobile = request('mobile');
        $employee->position = request('position');

        if ($employee->save()) {
            $last_insert_id = $employee->id;
            return $last_insert_id;
        } else {
            return response()->json(['error' => 'Error Registering',
            ]);
        }
    }

    public function getEmployees()
    {
        $db = new Employee();
        $employees = $db->getEmployees();

        return response()->json($employees, 200);

    }

    public function updateEmployee()
    {
        $employee = Employee::find(request('id'));
        if (!$employee) {
            return response()->json(['message' => 'Employee no Found'], 404);
        }

        if ($employee->fill(request()->all())->save()) {
            return response()->json(['message' => 'Employee Updated'], 200);
        };
    }

    public function deleteEmployee(Request $request)
    {
        $employee = Employee::find($request->id);
        if($employee){
            $employee->delete();
            return response()->json(['message' => 'Employee Deleted'], 201);
        } else {
            return response()->json(['message' => $employee], 404);

        }

    }

}
