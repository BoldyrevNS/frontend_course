<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Profile\Profile;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ProfileController extends Controller
{
    public function info($id){
         $user = Profile::query()
             ->where('id',$id)
             ->first();

         if($user === null){
             throw new NotFoundHttpException('Картинка не найдена.');
         }

        return $user;
    }
}
