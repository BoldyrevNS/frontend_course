<?php

namespace App\Http\Controllers\Hero;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Hero\Hero;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class HeroController extends Controller
{
    public function get($yourToken){
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($yourToken);
        $user = $token->tokenable;

        $data = Hero::query()->where('user_id','=',$user['id'])->first();
        if($data != null)
        {
            return $data;
        }
        else{
            throw new NotFoundHttpException("aboba");
        }
    }

    public function updateUser($yourToken, Request $request){
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($request->get($yourToken));
        $user = $token->tokenable;
        $hero = $request->get('Hero');;
        DB::table('hero')->updateOrInsert(["user_id" => $request->get("userID")],
            ["name"=> $hero['name'], "level" => $hero["level"], "armor" => "0",
            "heat" => "1",
            "strenght"=> $hero["strenght"],
            "dexterity" => $hero["dexterity"],
            "physique" => $hero["physique"],
            "intelligence" => $hero["intelligence"],
            "wisdom" => $hero["wisdom"],
            "charisma" => $hero["charisma"],
            "description" => $hero["description"],
            "image" => $hero["image"]]
    );
}

}
