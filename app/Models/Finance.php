<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Finance extends Model
{
    protected $fillable = [
        'date', 'order_trade_no', 'merchant_id', 'type', 'sub_type',
        'amount', 'comment',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'trade_no', 'order_trade_no');
    }

    public function merchant()
    {
        return $this->belongsTo(Merchant::class);
    }
}
