<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $fillable = [
        'trade_no', 'out_trade_no', 'status', 'channel', 'buyer_id',
        'buyer_open_id', 'amount', 'original_amount', 'detail', 'date',
        'pay_status', 'pay_time'
    ];
}
