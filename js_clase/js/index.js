document.addEventListener("DOMContentLoaded", function(){
// code









//objects
var flight={airline:"Ryanair",
number:562,
departure:{
    time:"2022-10-04",
    city:"Barcelona"
},
fullflight : function(){
    return this.airline+" "+this.number;
}
};
// var elMeuvol=newvol();

var cat={};
cat.name="Rufus";
cat.species="cat";
cat.age=6;

// cambia valores 2 opciones
flight.airline="Vueling"; // mejor esta
flight["number"]=789;




//
document.getElementById("objetos").innerHTML=flight.departure.city;// aqui muestras valores
document.getElementById("objeto").innerHTML=flight.fullflight();// aqui el metodo
console.log(flight)

//json: objecte javascript modificat

var avatar = '{"name":"Manz","life":6,"totallife":10}';
console.log(avatar);
console.log(typeof avatar);

//js dona dos funcions relacionades amb JSON
// parse() = de cadena JSON a objecte
var user= JSON.parse(avatar);
console.log(user);
console.log(typeof user);

var mycat = JSON.stringify(cat);//d'objecta a JSON
console.log(cat);
console.log(typeof cat);
console.log(mycat);
console.log(typeof mycat);
});