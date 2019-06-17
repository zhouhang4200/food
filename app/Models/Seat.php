<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    protected $fillable = [
        'merchant_id', 'name'
    ];

    public function merchant()
    {
        return $this->belongsTo(Merchant::class);
    }
}
