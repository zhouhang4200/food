<?php

namespace App\Http\Controllers\H5;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class H5Controller extends Controller
{
    function index()
    {
        return view('vue');
    }
}
