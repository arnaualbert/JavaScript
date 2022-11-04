// document.addEventListener("DOMContentLoaded", function(){
//     var paragraf= document.getElementById("id1");
//     paragraf=document.querySelector("#id1");//recollir id's
//     var hs=document.querySelector("h2");//recollir tags
//     var classes=document.querySelector(".error")//recollir clases 
//   })


// var input=document.querySelector("#id2").value;//recull el que hi ha en la caixa de text

// para cargar el documento :
$(document).ready(function () {
    var paragraf = $("#id1").html();// recull el text del paragraf
    console.log(paragraf);
    var hs = $("h2:first");
    console.log(hs);
    var classes = $(".error")
    console.log(classes);
    var input = $("#id2").val()//recull el que hi ha dins de l'element de un formulari
    $("#id2").val("Adeu");//canvia el text
    $("#div1").html("holaaaaa");// escriu en l'html .html es com el .innerhtml de javascript


    $("#id3").click(function(){alert("has clicat")})
    $("#id3").click(()=>{alert("has clicat")}) // el mateix pero amb una flecha
    $("#id3").click(clicantboto)


   // console.log(input)
});

function clicantboto(){
    alert("hola")
}