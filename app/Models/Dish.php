<?php

namespace App\Models;

use App\Category;
use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    protected $fillable = [
        'name', 'amount', 'original_amount', 'rate', 'logo',
        'material', 'category_id', 'merchant_id', 'tag', 'intro',
        'thumb', 'like_count'
    ];

    /**
     * @param $query
     * @param array $filters
     * @return mixed
     */
    public static function scopeFilter($query, $filters = [])
    {
        if (isset($filters['name']) && $filters['name']) {
            $query->where('name', 'like', "%".$filters['name']."%");
        }

        if (isset($filters['category_id']) && $filters['category_id']) {
            $query->where('category_id', $filters['category_id']);
        }

        return $query;
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function merchant()
    {
        return $this->belongsTo(Merchant::class);
    }

    public function comments() {
        return $this->hasMany(DishComment::class);
    }
}
