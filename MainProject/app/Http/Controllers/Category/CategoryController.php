<?php

namespace App\Http\Controllers\Category;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Category\Category;

class CategoryController extends Controller
{
    public function list(){
        return Category::query() -> get();
    }
    
    public function info($id){
        return Category::query()->where('id','=',$id)->first();
    }
}
