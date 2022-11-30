<?php

namespace App\Http\Controllers\Monster;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Monster\Monster;

class MonsterController extends Controller
{
    public function list(){
        return Monster::query() -> get();
    }
    
    public function info($id){
        return Monster::query()->where('id','=',$id)->first();
    }
}
