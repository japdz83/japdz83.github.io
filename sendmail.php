<?php
  
  $to = "japdz83@gmail.com";

// Recoger datos de formulario
  $name = $_POST["name"];  
  $email = $_POST["email"];
  $telephone = $_POST["telephone"];  
  $mensaje = $_POST["mensaje"];

  $contenido = "Nombre y Apellido: " . $name . "\nEmail: " . $email . "\nTeléfono: " . $telephone . "\nMensaje: " . $mensaje;

  mail($to,"Le han contactado desde su web", $contenido);

  header("Location: gracias.html");
  




 ?>