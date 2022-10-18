document.addEventListener("DOMContentLoaded", function(){
    // crea un nuevo objeto `Date`
var today = new Date();

// // obtener la fecha de hoy en formato `MM/DD/YYYY`
var now = today.toLocaleDateString('en-GB');

document.getElementById("fecha").innerHTML=now

// document.getElementById("divlogin").style.display="none";
// // var today = new Date();
// // // // obtener la fecha y la hora
// // var now = today.toLocaleString();
// // document.getElementById("hora").innerHTML=now;
// document.getElementById("bt1").addEventListener("click",function(){
//     document.getElementById("divlogin").style.display="block";
// })



document.getElementById("btvuelo").addEventListener("click",function(){

    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;

    var salida = document.getElementById("salida").value;
    var vuelta = document.getElementById("vuelta").value;

    var pasajeros = document.getElementById("pasajeros").value;;

    let infos={
        origen:origen,
        destino:destino,
        salida:salida,
        vuelta:vuelta,
        pasajeros:pasajeros
    };
    
    console.log(infos)
    //enviar aquest objecte al servidor:
    let xhr=new XMLHttpRequest();
    xhr.open("POST", "./php/vuelos.php");//obrir connexio
    xhr.send(JSON.stringify(infos));//enviament de dades: objeto a JSON antes del envio
    xhr.onload=function(){//esperar a rebre dades

        if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
          } else { // muestra el resultado
            //alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
            //xhr.response es un JSON que viene desde PHP
            let responseServer= JSON.parse(xhr.response);//reconvertirlo/parsearlo a variable JS
            document.getElementById("response").innerHTML= responseServer;
          }



    }
    // document.getElementById("fecha").innerHTML=now;

})

});


function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    // // crea un nuevo objeto `Date`
    // var today = new Date();

    // // obtener la fecha de hoy en formato `MM/DD/YYYY`
    // var now = today.toLocaleDateString('en-US');
    horaImprimible =  hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}


function validaNomCognoms(value){
    // esto funciona
       // true correcto false incorrecto
    var patternom=/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    if(patternom.test(value)){
        return true;
    }else{
        return false;
    };
    
}

// function setCookie(cname,cvalue,exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }
  
// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
  
//   function checkCookie() {
//     let user = getCookie("username");
//     if (user != "") {
//       alert("Welcome again " + user);
//     } else {
//       user = prompt("Please enter your name:", "");
//       if (user != "" && user != null) {
//         setCookie("username", user, 365);
//       }
//     }
//   }