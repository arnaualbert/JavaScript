document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("btex1").addEventListener("click",function(){
        email = document.getElementById("correo").value; 
        
        
        result = email.split('@'); 
        nombre = result[0] // lo de antes de la arroba
        resta = result[1] // despues de la arroba
        punto = resta.split(".") // gmail.com
        anpunto = punto[0] // gmail
        despunto = punto[1] //.com

        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("arroba").innerHTML = anpunto;
        document.getElementById("punto").innerHTML = despunto;


        if (nombre.length < 8)[document.getElementById("mensaje").innerHTML = "esta mal antes de la arroba"]
        else  (nombre.length > 8) [document.getElementById("mensaje").innerHTML = "esta bien antes de la arroba"]

        if (email.includes("@"))[document.getElementById("arrobas").innerHTML = "tiene @"]
        else  [document.getElementById("arrobas").innerHTML = "no tiene @"]
        // if (email.includes(/\d/))[document.getElementById("arrobas").innerHTML = "tiene @"]
        // else  [document.getElementById("arrobas").innerHTML = "no tiene @"]

        if (despunto.includes("cat"))[document.getElementById("puntcat").innerHTML = "tiene .cat"]
        else  [document.getElementById("puntcat").innerHTML = "no tiene .cat"]
        // if (despunto.length < 8)[document.getElementById("mensaje").innerHTML = "esta mal antes de la arroba"]
        // else  (despunto.length > 8) [document.getElementById("mensaje").innerHTML = "esta bien antes de la arroba"]

        hola = /\d/;
        si = hola.test(email)
        if (si === false) [document.getElementById("numeros").innerHTML = "pon un numero antes de la arroba"]
        else [document.getElementById("numeros").innerHTML = "tiene numero"]
        

    //     document.getElementById("nombre").innerHTML = result[0];
    //     document.getElementById("arroba").innerHTML = result[1];
    //     document.getElementById("punto").innerHTML = resulta[1];
    //     contarnombre = result[0].length;
    //     contararroba = result[1].length;
    //     contarpunto = resulta[1].length;

    //     if(contarnombre < 8){ text = "no es largo antes de la arroba"
    //    document.getElementById("mensaje").innerHTML = text;}else text = null;
    //    if(contararroba < 3){ text = "no es largo despues de la arroba"
    //    document.getElementById("mensajearroba").innerHTML = text;}

        // document.getElementById("nombre").innerHTML = contar;

        



        // correro = email.substring(0, email.indexOf('@'));
        // contar = correro.length;
        // despues = email.substring(email.indexOf('@') + 1);
        // contado = despues.length;
        // if (contar < 8){
        //     text = "no es largo antes de la arroba"
        //     document.getElementById("mensaje").innerHTML = text;
        // }else  text = "es lo suficientemente largo antes de la arroba"
        // document.getElementById("mensaje").innerHTML = text;

        // if (contado < 3){
        //     text = "falta despues de la arroba"
        //     document.getElementById("mensaje").innerHTML = text;
        // }else  text = "es lo suficientemente largo despues de la arroba"
        // document.getElementById("despues").innerHTML = text;

        // if(email.include("@")){
        //     text = "tiene arroba"
        //     document.getElementById("arroba").innerHTML = text;
        // }else  text = "no tiene arroba"
        // document.getElementById("arroba").innerHTML = text;

        // for(i=0;i<300;i++){
        // if(contenido.charAt(i)=="@"){contador++}
        // text = "tiene arroba"
        // document.getElementById("arroba").innerHTML = text;}
        // }else  text = "no tiene arroba"
        // document.getElementById("arroba").innerHTML = text;






        
    });
});