<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use App\Models\Gallery\Gallery;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class GalleryController extends Controller
{
    public function list(){
         return Gallery::query()
             ->orderBy('upload_date')
             ->limit(20)
             ->get();
//            return [];
    }

    public function info($id){
//         $picture = Gallery::query()
//             ->where('id',$id)
//             ->first();
//
//         if($picture === null){
//             throw new NotFoundHttpException('Картинка не найдена.');
//         }

        return [];//$picture;
    }
}
