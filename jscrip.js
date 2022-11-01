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

// var vs let vs const
// -----VAR-----
var otro = 23;
if (true) {
  var otro = 12; // Reemplaza el valor si tienen la misma declaracion de variable
  console.log(otro);
}
console.log(otro);

// -----LET-----
let mas = 40;
if (true) {
  let mas = 20;
  console.log(mas);
}
console.log(mas);

let array = [1, 2, 3, 4];
console.log(array);
// -----CONST-----
const edads = 10;

if (true) {
  const edads = 30;
  console.log(edads);
}
console.log(edads);

// -----ARRAY CONSTANTE------
const persona = {
  nombre: "Rodrigo",
  edad: 45
};
persona.ciudad = "SANTA CRUZ";
console.log(persona);

// ------- FUNCIONES ---------
function sumar() {
  console.log(10 + 10);
}
sumar();

function restar(num) {
  console.log(num);
}
restar(10 - 4);

const sumarDos = () => {
  console.log(3000 + 213);
};
sumarDos();
// ----FUNCIONES CON PARAMETROS ----------
const sumarTres = (num) => {
  console.log("sumarTres: " + num);
};
sumarTres(1 + 1);

const sumas = (num1, num2) => {
  console.log(num1 + num2);
};
sumas(1, 1);

const conReturn = (parametro) => {
  console.log(parametro);
};
conReturn("ninguno");

//

function nuevo (){
console.log(1+1)
}
nuevo()

function nuevaFuncion (param)
{
  console.log(param)
}
nuevaFuncion("este es una funcion con parametros")

//  -----------------------------------------
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>JAVASCRIPT!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// var vs let vs const
// -----VAR-----
var otro = 23;
if (true) {
  var otro = 12; // Reemplaza el valor si tienen la misma declaracion de variable
  console.log(otro);
}
console.log(otro);

// -----LET-----
let ma = 40;
if (true) {
  let ma = 20;
  console.log(ma);
}
console.log(ma);

let array = [1, 2, 3, 4];
console.log(array);
// -----CONST-----
const edad = 10;

if (true) {
  const edad = 30;
  console.log(edad);
}
console.log(edad);

// -----ARRAY CONSTANTE------
const persona = {
  nombre: "Rodrigo",
  edad: 45
};
persona.ciudad = "SANTA CRUZ";
console.log(persona);

// ------- FUNCIONES ---------
function sumar() {
  console.log(10 + 10);
}
sumar();

function restar(num) {
  console.log(num);
}
restar(10 - 4);

const sumarDos = () => {
  console.log(3000 + 213);
};
sumarDos();
// ----FUNCIONES CON PARAMETROS ----------
const sumarTres = (num) => {
  console.log("sumarTres: " + num);
};
sumarTres(1 + 1);

const sumas = (num1, num2) => {
  console.log(num1 + num2);
};
sumas(1, 1);

const conReturn = (parametro) => {
  console.log(parametro);
};
conReturn("ninguno");

//

function nuevo() {
  console.log(1 + 1);
}
nuevo();

function nuevaFuncion(param) {
  console.log(param);
}
nuevaFuncion("este es una funcion con parametros");

const resta = (numero1, numero2) => {
  return numero1 - numero2;
};
const resultado = resta(20, 10);
console.log(resultado);

const mensaje = () => {
  return "Hola soy Rodrigo";
};
const mostrar = mensaje();
console.log(mostrar);

const Nombres = (nom) => "Nombre: " + nom;

const nombrecompleto = Nombres("Eieden");
console.log(nombrecompleto);

// ------
const sumaCuatro = (num = 0) => {
  console.log(num + 5);
};
sumaCuatro(6);

// ---TEMPLATE STRING ---
const num = (n, n1) => {
  return `El numero es ${n + n1}`;
};
const res = num(10, 45);
console.log(res);

// ------ OBJETOS -------
const objetos = {
  Nombre: "Rodrigo",
  Edad: 26,
  vivo: true,
  array: ["ci", "patern"]
};
objetos.apellido = "Mamani";
objetos.otrosDatos = [{ Pais: "pais", Ciudad: "ciudad" }];

if (objetos.vivo != false) {
  console.log(objetos.Nombre + " Activo para registros");
} else {
  console.log("No activo");
}
console.log(objetos);
// console.log(objetos)
console.log(objetos.Nombre);
console.log(objetos.array[0]);

const estudiantes = {
  Curso: "2do secundaria",
  Año: "2020",
  Colegio: "Mariscal Andres",
  MejorEst: [{ Nombre: "Rodrigo", Edad: 15, Apellido: "Mamani" }],
  Nota: [26, 39]
};
estudiantes.turno = "tarde";
estudiantes.Curso = "3er secundaria";

console.log(estudiantes);
if (estudiantes.MejorEst[1] <= 18) {
  console.log("Cumple con la edad");
} else {
  console.log("Nom cumple con la edad");
}

// DESTRUCTURING OBJECTS

const mascota = {
  nombre: "Mailo",
  edad: 3,
  vivo: true,
  raza: "Chappie",
  Otros: ["alto", "black"]
};
console.log(mascota);

const { raza } = mascota;
console.log(raza);

// ARRAY DE OBJETOS
const web = {
  nombre: 'Mestizales',
  links: {
    enlace: 'www.mestizales.com'
  },
  redesSociales: {
    youtube: {
      enlace: 'youtbe/mestizales',
      nombre: 'mestizales yt',
    }
  }
}
// console.log(web.redesSociales.youtube.enlace)

// const guardar = web.redesSociales.youtube.enlace
// console.log(guardar)

const { nombre } = web.redesSociales.youtube.nombre
console.log(nombre)

//FETCH API
