<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    /**
     * $guarded is used for blacklist columns
     */
    protected $guarded = [];

    //one user has many
    public function user() 
    {
        return $this->belongsTo(User::class);
    }
}
