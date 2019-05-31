<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Merchant extends User
{
    use Notifiable, SoftDeletes, HasApiTokens;

    /**
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'phone', 'name', 'pid', 'status', 'date', 'password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * @param $query
     * @param array $filters
     * @return mixed
     */
    public static function scopeEmployeeFilter($query, $filters = [])
    {
        if ($filters['phone']) {
            $query->where('phone', $filters['phone']);
        }

        if ($filters['name']) {
            $query->where('name', $filters['name']);
        }

        return $query;
    }
}
