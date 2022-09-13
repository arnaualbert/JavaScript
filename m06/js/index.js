
document.addEventListener("DOMContentLoaded",function(){
    //codigo
    document.getElementById("div1").innerHTML="El <b>texto</b> lo he cambiado"

    document.getElementById("p1").addEventListener("click",function(){document.getElementById("p1").innerHTML +=" BARÇA";})
});