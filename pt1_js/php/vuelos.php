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




if ($origen == "Barcelona" AND $destino == "Madrid" AND $pasajeros == "2"){
    echo json_encode("El preu se de : 110€ \n La duracio es de 1h 7min");
}elseif ($origen == "Barcelona" AND $destino == "Madrid"  AND $pasajeros == "1"){
    echo json_encode("El preu se de : 55€ \n La duracio es de 1h 7min");
}elseif ($origen == "Barcelona" AND $destino == "Madrid"  AND $pasajeros == "3"){
    echo json_encode("El preu se de : 165€ \n La duracio es de 1h 7min");
}
