
document.addEventListener("DOMContentLoaded",function(){


    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";



    document.getElementById("btex1").addEventListener("click",function(){
        document.getElementById("div1").style.display="block";
        document.getElementById("div2").style.display="none";
        let dato = 10; // Número del que queremos calcular el factorial
        let r = 1;
        for(let i = dato; i>0; i--){
            var resurltado = r *= i;
            document.getElementById("resultado").innerHTML=resurltado;
        }
    });
    document.getElementById("btex2").addEventListener("click",function(){
        document.getElementById("div1").style.display="none";
        document.getElementById("resultado").style.display="none";
        document.getElementById("div2").style.display="block";
    });
});