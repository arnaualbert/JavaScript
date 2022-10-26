document.addEventListener("DOMContentLoaded", function(){
        // crea un nuevo objeto `Date`
    var today = new Date();
    
    // // obtener la fecha de hoy en formato `MM/DD/YYYY`
    var now = today.toLocaleDateString('en-GB');

    document.getElementById("fecha").innerHTML=now
    document.getElementById("vuelos").style.display="none";
    document.getElementById("divlogin").style.display="none";
    // var today = new Date();
    // // // obtener la fecha y la hora
    // var now = today.toLocaleString();
    // document.getElementById("hora").innerHTML=now;
    document.getElementById("bt1").addEventListener("click",function(){
        document.getElementById("divlogin").style.display="block";
        document.getElementById("vuelos").style.display="none";
        document.getElementById("info").style.display="none";
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
                if (responseServer=="Welcome Admin"){checkCookie("cookie",username);};
              }
        document.getElementById("divlogin").style.display="none";
        document.getElementById("divlogin").style.display="none";
        document.getElementById("vuelos").style.display="block";
    
    
        }
        // document.getElementById("fecha").innerHTML=now;
      // window.location = "./vuelos.html"
    })
    document.getElementById("btlogin").addEventListener("click",function(){

        var username= document.getElementById("username").value;
        var pwd= document.getElementById("pwd").value;
        let user2={
            username:username,
            pwd:pwd
        };
        console.log(user2)
        //enviar aquest objecte al servidor:
        let xhr=new XMLHttpRequest();
        xhr.open("POST", "./php/servers.php");//obrir connexio
        xhr.send(JSON.stringify(user2));//enviament de dades: objeto a JSON antes del envio
        xhr.onload=function(){//esperar a rebre dades
    
            if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
                alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
              } else { // muestra el resultado
                //alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
                //xhr.response es un JSON que viene desde PHP
                let responseServer= JSON.parse(xhr.response);//reconvertirlo/parsearlo a variable JS
                document.getElementById("response").innerHTML= responseServer;
                // if (responseServer=="Bienvenido"){checkCookie("cookie",username);};
              }
    
    
    
        }
        // document.getElementById("fecha").innerHTML=now;

    })

// aqui cambia todo



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
          document.getElementById("info").innerHTML= responseServer;
        }



  }
  // document.getElementById("fecha").innerHTML=now;
  document.getElementById("info").style.display="block";

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

    function setCookie(cname, cvalue) {
        document.cookie = cname + "=" + cvalue + ";"  + ";path=/";
      }

      function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      function checkCookie(namecookie,nameuser) {
        let username = getCookie(namecookie);
        if (username == "") {
            setCookie(namecookie,nameuser)
        }
      }
