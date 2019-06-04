<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerDishDetail extends Model
{
    public $fillable = ['open_id', 'type', 'merchant_id', 'dish_id', 'table_id', 'seat_id', 'number', 'tag'];

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
