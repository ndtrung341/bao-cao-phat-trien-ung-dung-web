<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductReview extends Model
{
    use HasFactory;
    protected $fillable = ['product_id', 'username', 'email', 'rating', 'content', 'approved'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }
}
