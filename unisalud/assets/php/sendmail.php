<?php
  require 'PHPMailer/PHPMailerAutoload.php';

  $mail = new PHPMailer;

  $to = "japdz83@gmail.com"; //Correo de contacto

  // Recoger datos de formulario
  $empresa = $_POST['empresa'];
  $contacto = $_POST['persona'];
  $cargo = $_POST['cargo'];
  $email = $_POST['email'];
  $telefono = $_POST['telefono'];
  $asunto = $_POST['asunto'];
  $empleados = $_POST['empleados'];
  $mensaje = nl2br($_POST['mensaje']);

  if($nombre == "" || $email == "" || $asunto == "" || $mensaje == ""):
    echo '<div id="error" class="alert alert-danger>Todos los campos son requeridos</div>"';
  else:

    $mail->From = $email;
    $mail->addAddress($to);
    $mail->Phone = $telefono;
    $mail->Subject = $asunto;    
    $mail->isHtml(true);
    $mail-> Body = '<strong>'.$nombre.'</strong> Le ha contactado desde su web, el ha enviado el siguiente mensaje: <br> <p>'.$mensaje.'</p>';

    $mail->CharSet = 'UTF-8';
    $mail->send();

  endif;



 ?>