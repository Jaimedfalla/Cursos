// Primer ejercicio
function Persona(nombres,apellidos,nickname){
    const completeName = `${nombres} ${apellidos}`;

    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas '${nickname}'.`);
}

Persona("Juan David","Castro Gallego","juandc");

// Segundo ejercicio
var tipoDeSuscripcion = "Basic";

var suscripciones =[
    {suscripcion:"Free",mensaje:"Solo puedes tomar los cursos gratis"},
    {suscripcion:"Basic",mensaje:"Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {suscripcion:"Expert",mensaje:"Puedes tomar casi todos los cursos de Platzi durante un año"},
    {suscripcion:"ExpertPlus",mensaje:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
];

var suscripcion = suscripciones.find((s)=> s.suscripcion===tipoDeSuscripcion);
if(suscripcion !== undefined){
    console.log(suscripcion[0].mensaje);
}

//Tercer ejercicio
var valido = false;

while(!valido){
    let suma = prompt("¿Cuanto es 2 + 2?");
    valido = parseInt(suma)===4;
}