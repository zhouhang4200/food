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

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_trade_no', 'trade_no');
    }

    /**
     * @param $query
     * @param array $filters
     * @return mixed
     */
    public static function scopeFilter($query, $filters = [])
    {
        if ($filters['name']) {
            $dishIds = Dish::where('name', 'like', "%".$filters['name']."%")
                ->where('merchant_id', $filters['merchant_id'])
                ->pluck('id');

            $query->whereIn('dish_id', $dishIds);
        }

        if ($filters['table_id']) {
            $query->where('table_id', $filters['table_id']);
        }

        if ($filters['seat_id']) {
            $query->where('seat_id', $filters['seat_id']);
        }

        if ($filters['status']) {
            $query->where('seat_id', $filters['status']);
        }

        if ($filters['date']) {
            $query->whereBetween('date', $filters['date']);
        }

        return $query;
    }
}
