// VARIABLES
var saludo = "Hola Rodrigo";

saludo+ ', tu edad es' + edad
var edad = 23;
console.log(saludo+ ', tu edad es' + edad);

var edad = 25;
console.log(saludo+ ', tu edad es' + edad)

const constante = 4;
var num = 4;
console.log(constante + num);

// CONDICIONALES

let miNumero =6 
let resultadoPregunta = miNumero ==  6;
console.log(resultadoPregunta);

if (miNumero == 6)
{
    console.log('si, mi numero vale   6')
}else
{
    console.log('no, error')
}

let edades = 25;
if (edades != 23){
    console.log('si, es diferente');
}else{
    console.log('no, no es diferente');
}

let numero = 5;
let nombre = 'Rodrigo';

if(numero ==5 && nombre ===  'Rodrigo')
{
    console.log('correcto')
}