document.addEventListener("DOMContentLoaded", function () {
    // crea un nuevo objeto `Date`
    var today = new Date();

    document.getElementById("fecha").innerHTML = today;
    // // obtener la fecha de hoy en formato `MM/DD/YYYY`
    var now = today.toLocaleDateString('en-GB');

    document.getElementById("fecha").innerHTML = now

    document.getElementById("divlogin").style.display = "none";

    document.getElementById("divregistro").style.display = "none";

    document.getElementById("divvuelos").style.display = "none";

    document.getElementById("bt3").style.display = "none";

    document.getElementById("buscar").style.display = "none"

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

        document.getElementById("bt3").style.display = "none";

        document.getElementById("bt2").style.display = "block";

        document.getElementById("bt1").style.display = "block";
    })

    document.getElementById("bt1").addEventListener("click", function () {
        document.getElementById("divlogin").style.display = "block";
        document.getElementById("divregistro").style.display = "none";
        document.getElementById("divvuelos").style.display = "none";
    })

    document.getElementById("bt2").addEventListener("click", function () {
        document.getElementById("divlogin").style.display = "none";
        document.getElementById("divvuelos").style.display = "none";
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
                    document.getElementById("bt1").style.display = "none";
                    document.getElementById("bt2").style.display = "none";
                    document.getElementById("divlogin").style.display = "none";
                    document.getElementById("divvuelos").style.display = "block";
                    document.getElementById("bt3").style.display = "block";
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
    document.getElementById("btvuelos").addEventListener("click", function () {
        document.getElementById("response").style.display = "block";
        // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // var d = new Date(salida);
        // var dayName = d.toString().split(' ')[0];
        // console.log(dayName)
        var origen = document.getElementById("origen").value;
        var destino = document.getElementById("destino").value;
        var salida = document.getElementById("salida").value;
        var d = new Date(salida);
        var dayName = d.toString().split(' ')[0];
        console.log(dayName)
        var vuelta = document.getElementById("vuelta").value;
        var pasajeros = document.getElementById("pasajeros").value;
        let viaje = {
            dayName: dayName,
            origen: origen,
            destino: destino,
            salida: salida,
            vuelta: vuelta,
            pasajeros: pasajeros
        };
        console.log(viaje);
        if (origen == "" || destino == "" || salida == "" || vuelta == "" || pasajeros == "") {
            alert("rellena todos los campos")
        } else if (origen == destino) { alert("el orige y el destino son el mismo") } else { alert("buscando viajes") }
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "./php/buscar.php");//obrir connexio
        xhr.send(JSON.stringify(viaje));//enviament de dades: objeto a JSON antes del envio
        xhr.onload = function () {//esperar a rebre dades

            if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
                alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
            } else { // muestra el resultado
                //alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
                //xhr.response es un JSON que viene desde PHP
                let responseServer = JSON.parse(xhr.response);//reconvertirlo/parsearlo a variable JS
                document.getElementById("info").innerHTML = responseServer;
                // if (responseServer == "Welcome Admin") { checkCookie("cookie", username); };
            }
        }
        //nuevo
        // xhr.abort();
        let ls = new XMLHttpRequest();
        ls.open("POST", "./php/salidas.php");
        ls.send(JSON.stringify(viaje));
        ls.onload = function () {

            if (ls.status != 200) {
                alert(`Error ${ls.status}: ${ls.statusText}`);
            } else {
                let responseServer = JSON.parse(ls.response);
                document.getElementById("tt").innerHTML = responseServer; // cambiar tt por salidas
                // nuevo
                var data = JSON.parse(ls.response);

                for (var i = 0; i < data.length; i++) {
                    var option = document.createElement("option");
                    option.value = data[i];
                    option.innerHTML = data[i];
                    document.getElementById("salidas").appendChild(option)
                };


                ///
            }
        }
        // ls.abort();
        // lo de arriba hasta //nuevo es nuevo
        if (origen == "" || destino == "" || salida == "" || vuelta == "" || pasajeros == "") {
            alert("rellena todos los campos")
        } else if (origen == destino) { alert("el orige y el destino son el mismo") } else {
            alert("buscando viajes")
            if ((dayName == "Mon") || (dayName == "Fri") || (dayName == "Sat")) {
                document.getElementById("divvuelos").style.display = "none";
                document.getElementById("tt").style.display = "none";
                document.getElementById("buscar").style.display = "block";
                // salidas(dayName);
            } else {
                alert("Solo hay vuelos los Lunes, los Viernes y los Sabados")
            }
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
    document.cookie = cname + "=" + cvalue;
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

// function loadoptions(){
//     let request = new XMLHttpRequest()
//     request.open("GET","./php/vuelos.php");
//     request.send();
//     request.onload = function (){
//         var data= JSON.parse(request.response);

//         for(var i=0;i < data.length;i++){
//             var option = document.createElement("option");
//             option.value = i;
//             option.innerHTML = data[i];
//             document.getElementById("origen").appendChild(option)
//         };

//         for(var i=0;i < data.length;i++){
//             var option = document.createElement("option");
//             option.value = i;
//             option.innerHTML = data[i];
//             document.getElementById("destino").appendChild(option)
//         };
//     }
// }

function loadoptions() {
    let request = new XMLHttpRequest()
    request.open("GET", "./php/vuelos.php");
    request.send();
    request.onload = function () {
        var data = JSON.parse(request.response);

        for (var i = 0; i < data.length; i++) {
            var option = document.createElement("option");
            option.value = data[i];
            option.innerHTML = data[i];
            document.getElementById("origen").appendChild(option)
        };

        for (var i = 0; i < data.length; i++) {
            var option = document.createElement("option");
            option.value = data[i];
            option.innerHTML = data[i];
            document.getElementById("destino").appendChild(option)
        };
    }
}

// function salidas(dayname) {
//     let request = new XMLHttpRequest()
//     request.open("POST", "./php/salidas.php");
//     request.send(JSON.stringify(dayname));
//     request.onload = function () {
//         var data = JSON.parse(request.response);

//         for (var i = 0; i < data.length; i++) {
//             var option = document.createElement("option");
//             option.value = data[i];
//             option.innerHTML = data[i];
//             document.getElementById("salidas").appendChild(option)
//         };
//     }
// }