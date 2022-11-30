<?php

namespace App\Http\Controllers\Level;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Level\Level;

class LevelController extends Controller
{
    public function list(){
        return Level::query() -> get();
    }
    
    public function info($id){
        return Level::query()->where('id','=',$id)->first();
    }
}
