<?php

namespace App\Http\Controllers\Vue;

use App\Http\Controllers\Controller;

class VueController extends Controller
{
    /**
     * SpaController constructor.
     */
    public function __construct()
    {
//        parent::__construct();

        if (! in_array(request()->getPathInfo(), ['/login', '/register'])) {

            return $this->middleware('auth');

        }
    }

    /**
     * @return mixed
     */
    function index()
    {
        return view('vue');
    }
}
