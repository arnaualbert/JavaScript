document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("btEx4").addEventListener("click", function(){
        document.getElementById("valMsg").innerText = "";
        var email=document.getElementById("input4").value;
        
        email = email.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        email = email.toLowerCase();

        var name   = email.substring(0, email.lastIndexOf("@"));
        var server = email.substring(email.lastIndexOf("@") +1,email.lastIndexOf("."));
        var server2=email.substring(email.lastIndexOf("@") +1);
        var domain = email.substring(email.lastIndexOf(".") +1);

        if (email.includes('@')){
            //Contar caracters abans de @
            if (name.length < 8){
                document.getElementById("valMsg").innerText += "Nom de correu massa curt (menys de 8 caràcters abans de l'@)\n";
            }

            //Comprovar si hi ha num al nom del correu
            if (!/\d/.test(name)){
                document.getElementById("valMsg").innerText += "Nom de correu no té nuúmero (el correu ha de contenir un número abans de l'@)\n";
            }

            //Contar caracters després de @
            if (server.length < 3){
                document.getElementById("valMsg").innerText += "Servidor de correu massa curt (menys de 3 caràcters després de l'@)\n";
            }

            //Comprovar si hi ha punt al domini del correu(a partir de la @)
            if (!server2.includes('.')){
                document.getElementById("valMsg").innerText += "Servidor de correu no té '.' (el correu ha de contenir un punt després de l'@)\n";
            }

            //Comprovar si punt és prou llarg
            if (domain.length < 2 || domain.length > 6){
                document.getElementById("valMsg").innerText += "Domini de correu massa curt (menys de 2 caràcters després del punt)\n";
            }
            else if(domain.length > 6){
                document.getElementById("valMsg").innerText += "Domini de correu massa llarg (més de 6 caràcters després del punt)\n";
            }
        }
        else{
            document.getElementById("valMsg").innerText += "Introdueixi una direcció vàlida. El correu ha d'incloure una @";
        }
        
        //Si la direcció de correu és vàlida
        if(document.getElementById("valMsg").innerText == ""){
            document.getElementById("valMsg").innerText = email;
            document.getElementById("valMsg").innerText += "\nEl correu és de domini .cat:";
            if (domain == "cat")
            {
                document.getElementById("valMsg").innerText += " VERDADER";
            }
            else{
                document.getElementById("valMsg").innerText += " FALS";
            }
        }
    });

    //FUNCIÓ EXTRETA D'INTERNET
    var replaceDiacritics = function (string) {
        var diacritics = [
          /[\300-\306]/g, /[\340-\346]/g, // A, a
          /[\310-\313]/g, /[\350-\353]/g, // E, e
          /[\314-\317]/g, /[\354-\357]/g, // I, i
          /[\322-\330]/g, /[\362-\370]/g, // O, o
          /[\331-\334]/g, /[\371-\374]/g, // U, u
          /[\321]/g, /[\361]/g, // N, n
          /[\307]/g, /[\347]/g, // C, c
        ];
      
        var chars = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];
      
        for (var i = 0; i < diacritics.length; i++) {
          string = string.replace(diacritics[i], chars[i]);
        }
        return string;
      }

});