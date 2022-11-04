document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("divlogin").style.display="none";
    // var today = new Date();
    // // // obtener la fecha y la hora
    // var now = today.toLocaleString();
    // document.getElementById("hora").innerHTML=now;
    document.getElementById("bt1").addEventListener("click",function(){
        document.getElementById("divlogin").style.display="block";
    })
    document.getElementById("btRegistro").addEventListener("click",function(){

        var username= document.getElementById("username").value;
        var pwd= document.getElementById("pwd").value;
        let user2={
            usuario:username,
            contraseña:pwd
        };
        console.log(user2)
    
    
        // ENVIAR OBJECTE SERVIDOR
        let xhr= new XMLHttpRequest();
        xhr.open("POST","./php/server.php");//obrir conexio open tiene 2 parametros ("GET"o"POST")
        xhr.send(JSON.stringify(user2));// envio de dades
        xhr.onload=function(){// esperar a rebre dades
            if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
                alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
              } else { // muestra el resultado
                alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
                let responseServer= JSON.parse(xhr.response);
                document.getElementById("response").innerHTML=responseServer        
            }
        }
    })
    });


    function mueveReloj(){
        momentoActual = new Date()
        hora = momentoActual.getHours()
        minuto = momentoActual.getMinutes()
        segundo = momentoActual.getSeconds()
    
        horaImprimible = hora + " : " + minuto + " : " + segundo
    
        document.form_reloj.reloj.value = horaImprimible
    
        setTimeout("mueveReloj()",1000)
    }