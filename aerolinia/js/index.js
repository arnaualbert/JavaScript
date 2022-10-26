document.addEventListener("DOMContentLoaded", function () {
    // crea un nuevo objeto `Date`
    var today = new Date();

    document.getElementById("fecha").innerHTML=today;
    // // obtener la fecha de hoy en formato `MM/DD/YYYY`
    var now = today.toLocaleDateString('en-GB');

    document.getElementById("fecha").innerHTML = now

    document.getElementById("divlogin").style.display = "none";

    document.getElementById("divregistro").style.display = "none";

    document.getElementById("divvuelos").style.display = "none";

    // document.getElementById("origen").

    document.getElementById("bt3").addEventListener("click", function () {
       //console.log(getCookie("galeta"))
       // borrarcookie("cookie")
        // eliminarCookies();
        document.cookie = "galeta=notexist;expires=Thu, 01 Jan 1970 00:00:00 UTC";

        document.getElementById("divlogin").style.display = "none";

        document.getElementById("divregistro").style.display = "none";
    
        document.getElementById("divvuelos").style.display = "none";

        document.getElementById("response").style.display = "none";
    })

    document.getElementById("bt1").addEventListener("click", function () {
        document.getElementById("divlogin").style.display = "block";
        document.getElementById("divregistro").style.display = "none";
    })

    document.getElementById("bt2").addEventListener("click", function () {
        document.getElementById("divlogin").style.display = "none";
        document.getElementById("divregistro").style.display = "block";
    })

    document.getElementById("btLogin").addEventListener("click", function () {
        var username = document.getElementById("username").value;
        var pwd = document.getElementById("pwd").value;
        let user2 = {
            username: username,
            pwd: pwd
        };
        console.log(user2)
        //enviar aquest objecte al servidor:
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "./php/server.php");//obrir connexio
        xhr.send(JSON.stringify(user2));//enviament de dades: objeto a JSON antes del envio
        xhr.onload = function () {//esperar a rebre dades

            if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
                alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
            } else { // muestra el resultado
                //alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
                //xhr.response es un JSON que viene desde PHP
                let responseServer = JSON.parse(xhr.response);//reconvertirlo/parsearlo a variable JS
                document.getElementById("response").innerHTML = responseServer;
                if (responseServer == "Welcome Admin") {
                    checkCookie("galeta", username);
                    document.getElementById("divlogin").style.display = "none";
                    document.getElementById("divvuelos").style.display = "block";
                    loadoptions();
                };
            }
        }
    })

    document.getElementById("btregistro").addEventListener("click", function () {
        var nom = document.getElementById("nom").value;
        var username = document.getElementById("username_reg").value;
        var pwd = document.getElementById("pwd_reg").value;
        let user2 = {
            nom: nom,
            username: username,
            pwd: pwd
        };
        console.log(user2)
        //enviar aquest objecte al servidor:
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "./php/registro.php");//obrir connexio
        xhr.send(JSON.stringify(user2));//enviament de dades: objeto a JSON antes del envio
        xhr.onload = function () {//esperar a rebre dades

            if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
                alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
            } else { // muestra el resultado
                //alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
                //xhr.response es un JSON que viene desde PHP
                let responseServer = JSON.parse(xhr.response);//reconvertirlo/parsearlo a variable JS
                document.getElementById("response").innerHTML = responseServer;
                // if (responseServer == "Welcome Admin") { checkCookie("cookie", username); };
            }
            document.getElementById("divregistro").style.display = "none";
        }
    })

});


function mueveReloj() {
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    // // crea un nuevo objeto `Date`
    // var today = new Date();

    // // obtener la fecha de hoy en formato `MM/DD/YYYY`
    // var now = today.toLocaleDateString('en-US');
    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()", 1000)
}


function validaNomCognoms(value) {
    // esto funciona
    // true correcto false incorrecto
    var patternom = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    if (patternom.test(value)) {
        return true;
    } else {
        return false;
    };

}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue ;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
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

function checkCookie(namecookie, nameuser) {
    let username = getCookie(namecookie);
    if (username == "") {
        setCookie(namecookie, nameuser)
    }
}

const borrarcookie = (cookie) => {
    document.cookie = "cookie=;max-age=0";
}

// function eliminarCookies() {
//     document.cookie.split(";").forEach(function (c) {
//         document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
//     })
// }

function loadoptions(){
    let request = new XMLHttpRequest()
    request.open("GET","./php/vuelos.php");
    request.send();
    request.onload = function (){
        var data= JSON.parse(request.response);

        for(var i=0;i < data.length;i++){
            var option = document.createElement("option");
            option.value = i;
            option.innerHTML = data[i];
            document.getElementById("origen").appendChild(option)
        };

        for(var i=0;i < data.length;i++){
            var option = document.createElement("option");
            option.value = i;
            option.innerHTML = data[i];
            document.getElementById("destino").appendChild(option)
        };
    }
}