<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'pid', 'name'
    ];

    public function dishes() {
        return $this->hasMany(Dish::class);
    }

    public static function scopeFilter($query, $filters = []) {
        if ($filters['name']) {
            $query->where('name', $filters['name']);
        }

        return $query;
    }
}
