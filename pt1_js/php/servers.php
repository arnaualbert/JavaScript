<?php

//variables, arrays,...


//recoger las peticiones
$entrada=file_get_contents('php://input');

//paso de JSON, cadena de texto, a variable de PHP
$entrada=json_decode($entrada);

$username= $entrada->{'username'};
//var_dump($name);
$password= $entrada->{'pwd'};

if ($username == true AND $password == true){
    echo json_encode("Bienvenido");
}
