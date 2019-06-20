<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    protected $fillable = [
        'pid', 'name', 'merchant_id', 'logo', 'address',
        'license_number', 'legal_person', 'legal_phone',
        'status'
    ];
}
