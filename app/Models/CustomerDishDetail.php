<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerDishDetail extends Model
{
    protected $fillable = ['order_trade_no', 'merchant_id', 'dish_id', 'table_id', 'seat_id', 'number'];

    public function dish()
    {
        return $this->belongsTo(Dish::class);
    }

    public function table()
    {
        return $this->belongsTo(Table::class);
    }

    public function seat()
    {
        return $this->belongsTo(Seat::class);
    }
}
