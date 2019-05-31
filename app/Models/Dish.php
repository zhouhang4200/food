<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    public $fillable = [
        'name', 'amount', 'original_amount', 'rate', 'logo', 'material', 'category'
    ];

    /**
     * @param $query
     * @param array $filters
     * @return mixed
     */
    public static function scopeFilter($query, $filters = [])
    {
        if ($filters['name']) {
            $query->where('name', 'like', "%".$filters['name']."%");
        }

        if ($filters['category']) {
            $query->where('category', 'like', "%".$filters['category']."%");
        }

        return $query;
    }
}
