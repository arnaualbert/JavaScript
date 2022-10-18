<?php

//variables, arrays,...


//recoger las peticiones
$entrada=file_get_contents('php://input');

//paso de JSON, cadena de texto, a variable de PHP
$entrada=json_decode($entrada);

$origen= $entrada->{'origen'};
$destino= $entrada->{'destino'};
// $salida= $entrada->{'salida'};
// $vuelta= $entrada->{'vuelta'};
$pasajeros= $entrada->{'pasajeros'};


if ($origen == "Barcelona" AND $destino == "Madrid"){
    echo json_encode("El preu se de : 55€ \n La duracio es de 1h 7min");
}
