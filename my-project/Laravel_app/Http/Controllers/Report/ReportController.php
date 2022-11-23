<?php

namespace App\Http\Controllers\Report;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'D:/Programm Files/OSPanel/vendor/phpmailer/phpmailer/src/Exception.php';
require 'D:/Programm Files/OSPanel/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'D:/Programm Files/OSPanel/vendor/phpmailer/phpmailer/src/SMTP.php';


use App\Http\Controllers\Controller;
use App\Models\Account\Account;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ReportController extends Controller
{
    public function check_email($email){
         $account = Account::query()
             ->where('mail',$email)
             ->first();

         if($account === null){
             return '0';
         }


$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
$mail->Host = "smtp.mail.ru";
//$mail->Port = 465;
$mail->Username = 'magastik@mail.ru';            
$mail->Password = '27WbeLwa34BeDT6kM9jn';            
// От кого
$mail->setFrom('magastik@mail.ru', 'Pixourse');		
// Кому
$mail->addAddress($email, $email);
// Тема письма
$mail->Subject = 'Notification: No reply';
// Тело письма
$body = '<b><h4>Ваша жалоба принята и скоро будет рассмотрена!</h4></b>';
$mail->msgHTML($body);
$mail->send();

         return '1';
    }
}
