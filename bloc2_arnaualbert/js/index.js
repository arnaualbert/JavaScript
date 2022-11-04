var names;
var email;
var dni;
var my_cum;

document.addEventListener("DOMContentLoaded", function () {
   
    // 0 quan carrega la pagina el boto esta deshabilitat
    document.getElementById("tuNombre").addEventListener("blur", function () {

        names=document.getElementById("tuNombre").value
        // 1 es valida en sortir de cada camp ---> associar un esdeveniment a cada camp
        var flag=validaNomCognoms(names);
        if(flag){
            document.getElementById("errorN").innerHTML="";
        }else{
            document.getElementById("errorN").innerHTML="vuelve a introducir el nombre, solo se permiten letras";
        }
    })
    document.getElementById("tuApellidos").addEventListener("blur", function () {

        names=document.getElementById("tuApellidos").value
        // 1 es valida en sortir de cada camp ---> associar un esdeveniment a cada camp
        var flag=validaNomCognoms(names);
        if(flag){
            document.getElementById("errorA").innerHTML="";
        }else{
            document.getElementById("errorA").innerHTML="vuelve a introducir el nombre, solo se permiten letras";
        }
    })
    document.getElementById("tuEmail").addEventListener("blur", function () {

        email=document.getElementById("tuEmail").value
        // 1 es valida en sortir de cada camp ---> associar un esdeveniment a cada camp
        var flag=validaEmail(email);
        if(flag){
            document.getElementById("errorE").innerHTML="";
        }else{
            document.getElementById("errorE").innerHTML="vuelve a introducir el email";
        }
    })
    document.getElementById("tuDni").addEventListener("blur", function () {

        dni=document.getElementById("tuDni").value
        // 1 es valida en sortir de cada camp ---> associar un esdeveniment a cada camp
        var validado=validaDni(dni);
        // if(flag){
        //     document.getElementById("errorD").innerHTML="";
        // }else{
        //     document.getElementById("errorD").innerHTML="vuelve a introducir el DNI";
        // }
    })
    document.getElementById("tuNac").addEventListener("blur", function (){
        my_cum=document.getElementById("tuNac").value
        // console.log(my_cum)
        var hoy             = new Date();
        var fechaFormulario = new Date(my_cum);
        var diferencia;
        diferencia = hoy.getTime()-fechaFormulario.getTime();
        console.log(diferencia)



        // hoy.setHours(0,0,0,0);

        if (diferencia < 0) {
        
            document.getElementById("errorDa").innerHTML="no naciste en el futuro";
        }
        else {
            // var edad=getEdad(my_cum);
            if (diferencia < 568025136000){document.getElementById("maemenos").innerHTML="menor de edad";}else{document.getElementById("maemenos").innerHTML="mayor de edad";}
            // document.getElementById("errorDa").innerHTML=edad;
        }

    })
    // 2 haig de cridar als validadors (funcions)
    
    // 3 si hi ha algun error, missatge d'error al camp corresponent i botó deshabilitat
    
    // 4 si tot OK, botó s'habilita i es construeix dinàmicament el text que diu el teu nom i cognoms, email, dni, data de naixement, 
    // 5 edat i dies que et falten per al teu aniversari
    
    
 });

    


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

function validaEmail(value){
    var patternemail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/


    if(patternemail.test(value)){
        return true;
    }else{
        return false;
    };
}

function validaDni(dni){
     
    if(dni.length==9){
        
        let numero=dni.substring(0,8);

        console.log(numero);
        let letra=dni.substr(dni.length-1,1);
        console.log(letra);
        if(isNaN(numero) || !isNaN(letra)){
            document.getElementById("errorD").innerHTML="Formato incorrecto";
            flag=false;
        }else{
            let calculo=numero % 23;//numero entre 0 i 22
            console.log(calculo);
            let letras="TRWAGMYFPDXBNJZSQVHLCKE";
            //let letrasArray=Array("T","R",...);
            // console.log(letras[calculo]);//miro la letra de verdad
    
            if(letra.toUpperCase()==letras[calculo]){
                document.getElementById("errorD").innerHTML="";
            }else{
                document.getElementById("errorD").innerHTML=`Tu dni ${dni} es falso`;
                flag=false;
            }
        }
        
    }else{
        document.getElementById("errorD").innerHTML="Tamaño incorrecto";
        flag=false;
    }
    
}


function getEdad(dateString) {
    let hoy = new Date()
    let fechaNacimiento = new Date(dateString)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--
    }
    return edad
  }