<?php
  
  $to = "1unisalud@gmail.com";

// Recoger datos de formulario
  $empresa = $_POST["empresa"];
  $contacto = $_POST["contacto"];
  $cargo = $_POST["cargo"];
  $email = $_POST["email"];
  $telefono = $_POST["telefono"];
  $servicio = $_POST["servicio"];
  $empleados = $_POST["empleados"];
  $mensaje = $_POST["mensaje"];

  $contenido = "Empresa: " . $empresa . "\nPersona de Contacto: " . $contacto . "\nCargo: " . $cargo . "\nEmail: " . $email . "\nTeléfono: " . $telefono .  "\nServicio Requerido: " . $servicio . "\nNúmero de Empleados: " . $empleados . "\nMensaje: " . $mensaje;

  mail($to,"Le han contactado desde su web", $contenido);

  header("Location: index.html");
  




 ?>