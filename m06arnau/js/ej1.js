
document.addEventListener("DOMContentLoaded",function(){


    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";



    document.getElementById("btex1").addEventListener("click",function(){
        document.getElementById("div1").style.display="block";
        document.getElementById("div2").style.display="none";
        document.getElementById("div4").style.display="none";
        let dato = 10; // Número del que queremos calcular el factorial
        let r = 1;
        for(let i = dato; i>0; i--){
            var resurltado = r *= i;
            document.getElementById("resultado").innerHTML=resurltado;
        }
        document.getElementById("resultado").style.display="block";
    });
    document.getElementById("btex2").addEventListener("click",function(){
        document.getElementById("div1").style.display="none";
        document.getElementById("div4").style.display="none";
        document.getElementById("resultado").style.display="none";
        document.getElementById("div2").style.display="block";
        document.getElementById("num1").style.display="block";
        document.getElementById("num2").style.display="block";
        document.getElementById("suma").style.display="block";
        document.getElementById("resta").style.display="block";
        document.getElementById("multi").style.display="block";
        document.getElementById("divi").style.display="block";});
        document.getElementById("suma").addEventListener("click",function(){
        var x,y,suma,text;  
        x = document.getElementById("num1").value;  
        y = document.getElementById("num2").value;  
        suma=parseFloat(x)+parseFloat(y);  
        text= suma; 
        document.getElementById("sumando").innerHTML = text;});
        document.getElementById("resta").addEventListener("click",function(){
        var x,y,resta,text;  
        x = document.getElementById("num1").value;  
        y = document.getElementById("num2").value;          
            resta=(x)-(y);  
            text= resta;  
            document.getElementById("restando").innerHTML = text;});
        document.getElementById("multi").addEventListener("click",function(){
        var x,y,multi,text;  
        x = document.getElementById("num1").value;  
        y = document.getElementById("num2").value;  
            multi=(x)*(y);  
            text= multi;  
            document.getElementById("multiplicando").innerHTML = text;});
        document.getElementById("divi").addEventListener("click",function(){
        var x,y,divide,text;  
        x = document.getElementById("num1").value;  
        y = document.getElementById("num2").value;  
            divide=parseFloat(x)/parseFloat(y);  
            text= divide;  
            document.getElementById("dividiendo").innerHTML = text;});


    document.getElementById("btex4").addEventListener("click",function(){
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display="none";
        document.getElementById("resultado").style.display="none";
        document.getElementById("div4").style.display="block";
        email = document.getElementById("email").value;
        document.getElementById("val").addEventListener("click",function(){
            correro = email.substring(0, email.indexOf('@'));
            contar = correro.length;
        });

    });
});