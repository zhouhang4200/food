<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'trade_no', 'out_trade_no', 'status', 'channel', 'buyer_id',
        'buyer_open_id', 'amount', 'original_amount', 'detail', 'date',
        'pay_status', 'pay_time', 'merchant_id', 'table_id', 'seat_id',
        'comment', 'channel_name', 'pay_info'
    ];

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

        if ($filters['table_id']) {
            $query->where('table_id', $filters['table_id']);
        }

        if ($filters['seat_id']) {
            $query->where('seat_id', $filters['seat_id']);
        }

        if (isset($filters['pay_status'])) {
            $query->where('pay_status', $filters['pay_status']);
        }

        if ($filters['channel']) {
            $query->where('channel', $filters['channel']);
        }

        if ($filters['date']) {
            $query->whereBetween('date', $filters['date']);
        }

        return $query;
    }
}
