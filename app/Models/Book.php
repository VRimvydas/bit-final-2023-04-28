<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'author',
        'summary',
        'isbn',
        'image',
        'pages',
        'category_id'
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }


    public function scopeFilter(Builder $query, $filter){
        if ($filter->name!=null){
            $query->where("name", "like", "%$filter->name%");
        }
        if ($filter->category_id!=null){
            $query->where("category_id",$filter->category_id);
        }

    }
}
