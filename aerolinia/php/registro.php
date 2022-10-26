<?php

$entrada=file_get_contents('php://input');

//paso de JSON, cadena de texto, a variable de PHP
$entrada=json_decode($entrada);
$registrados = array();

$username = $entrada->{'username'};
// var_dump($username);
$pwd = $entrada->{'pwd'};

$nom = $entrada->{'nom'};

if(($username==true)&&($pwd==true)){
    array_push($registrados,$entrada);
    echo json_encode("Registrado $username");
};