<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Finance extends Model
{
    protected $fillable = [
        'date', 'order_trade_no', 'merchant_id', 'type', 'sub_type',
        'amount', 'comment',
    ];
}
