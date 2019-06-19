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

    /**
     * @param $query
     * @param array $filters
     * @return mixed
     */
    public static function scopeFilter($query, $filters = [])
    {
        if ($filters['trade_no']) {
            $query->where('trade_no', 'like', '%'.$filters['trade_no'].'%');
        }

        if (isset($filters['sub_type'])) {
            $query->where('sub_type', $filters['sub_type']);
        }

        if ($filters['date']) {
            $query->whereBetween('date', $filters['date']);
        }

        return $query;
    }
}
