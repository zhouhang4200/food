<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cashier extends Model
{
    protected $fillable = ['merchant_id', 'phone', 'name',];

    public function merchant() {
        return $this->belongsTo(Merchant::class);
    }
}
