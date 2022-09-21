document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("btex1").addEventListener("click",function(){
        email = document.getElementById("correo").value;  
        correro = email.substring(0, email.indexOf('@'));
        contar = correro.length;
        despues = email.substring(email.indexOf('@') + 1);
        contado = despues.length;
        if (contar < 8){
            text = "no es largo antes de la arroba"
            document.getElementById("mensaje").innerHTML = text;
        }else  text = "es lo suficientemente largo antes de la arroba"
        document.getElementById("mensaje").innerHTML = text;

        if (contado < 3){
            text = "falta despues de la arroba"
            document.getElementById("mensaje").innerHTML = text;
        }else  text = "es lo suficientemente largo despues de la arroba"
        document.getElementById("despues").innerHTML = text;

        if(email.include("@")){
            text = "tiene arroba"
            document.getElementById("arroba").innerHTML = text;
        }else  text = "no tiene arroba"
        document.getElementById("arroba").innerHTML = text;

        for(i=0;i<300;i++){
        if(contenido.charAt(i)=="@"){contador++}
        text = "tiene arroba"
        document.getElementById("arroba").innerHTML = text;}
        // }else  text = "no tiene arroba"
        // document.getElementById("arroba").innerHTML = text;






        
    });
});