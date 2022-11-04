document.addEventListener("DOMContentLoaded",function(){
    var nombre 
    var cognom 
    var email
    var dni 
    do {
        nombre = prompt("como te llamas?","");
    }while(nombre=="" || !validaNomCognoms(nombre))
    do {
        cognom = prompt("como te llamas?","");
    }while(cognom=="" || !validaNomCognoms(cognom))

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