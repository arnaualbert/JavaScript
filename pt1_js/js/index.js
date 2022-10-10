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
            username:username,
            pwd:pwd
        };
        console.log(user2)
        //enviar aquest objecte al servidor:
        let xhr=new XMLHttpRequest();
        xhr.open("POST", "./php/server.php");//obrir connexio
        xhr.send(JSON.stringify(user2));//enviament de dades: objeto a JSON antes del envio
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