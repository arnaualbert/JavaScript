<?php

// variables, arrays,...



// recoger las peticiones
$entrada=file_get_contents("php://input");

var_dump($entrada);

$name=$entrada->("nom");//name
// var_dump($name);
$course=$entrada->("course");
// var_dump($course);
$array=["dawbio2","daw2"];

echo json_encode($array);
// codigo


?>