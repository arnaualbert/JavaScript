$(document).ready(function () {
    $("#nombre").blur(function(){
        var nombre = $("#nombre").val();
        var biennombre = validaNomCognoms(nombre);
        console.log(biennombre);
    })

    $("#apellidos").blur(function(){
        var apellido = $("#apellidos").val();
        var bienapellido = validaNomCognoms(apellido);
        console.log(bienapellido);
    })
    
    $("#telefono").blur(function(){
        var telefono = $("#telefono").val();
        var bientelefono = validatelefon(telefono)
        console.log(bientelefono);
    })
    // var nombre = $("#nombre").val();

    // var apellido = $("#apellidos").val();
    // var telefono = $("#telefono").val();
    var movil = $("#movil").val();
    var email = $("#email").val();
    var dni = $("#dni").val();
    console.log(nombre);
    console.log(apellido);
    console.log(telefono);
    console.log(movil);
    console.log(email);
    console.log(dni);
    
    // var biennombre = validaNomCognoms(nombre);
    // var bienapellido = validaNomCognoms(apellido);
    var biendni = validaDni(dni);
    var bienemail = validaEmail(email);
    var bienmovil = validamovil(movil);
    // var bientelefono = validatelefon(telefono)
    // console.log(biennombre);
    console.log(bienapellido);
    console.log(biendni);
    console.log(bienemail);
    console.log(bienmovil);
    console.log(bientelefono)

    $("#bto").click(function () {
        // var nombre = $("#nombre").val();
        // var apellido = $("#apellidos").val();
        // var telefono = $("#telefono").val();
        // var movil = $("#movil").val();
        // var email = $("#email").val();
        // var dni = $("#dni").val();
        // console.log(nombre);
        // console.log(apellido);
        // console.log(telefono);
        // console.log(movil);
        // console.log(email);
        // console.log(dni);
        
        // var biennombre = validaNomCognoms(nombre);
        // var bienapellido = validaNomCognoms(apellido);
        // var biendni = validaDni(dni);
        // var bienemail = validaEmail(email);
        // var bienmovil = validamovil(movil);
        // var bientelefono = validatelefon(telefono)
        // console.log(biennombre);
        // console.log(bienapellido);
        // console.log(biendni);
        // console.log(bienemail);
        // console.log(bienmovil);
        // console.log(bientelefono)
    })
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
function validatelefon(telefono){
var telpat = /(^[0-9]{3})-([0-9]{6}$)/;
if(telpat.test(telefono)){
    return true;
}else{
    return false;
}
}
function validamovil(movil){
var pat = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/gm;
if(pat.test(movil)){
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
            return false;
        }else{
            let calculo=numero % 23;//numero entre 0 i 22
            console.log(calculo);
            let letras="TRWAGMYFPDXBNJZSQVHLCKE";
            //let letrasArray=Array("T","R",...);
            // console.log(letras[calculo]);//miro la letra de verdad
    
            if(letra.toUpperCase()==letras[calculo]){
                return true;
            }else{
                return false;
            }
        }
        
    }else{

        return false;
    }
    
}