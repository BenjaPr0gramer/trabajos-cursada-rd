// CLASE 10
/* agregado de variable
let nombre = "Programación" + " Fácil.";
let saludo = "Les doy la bienvenida a ";
let usuarios = "los estudiantes en "
let fraseCompleta = saludo + usuario + nombre;

console.log(fraseCompleta); */

/* Prueba codigo
let frase = "JavaScript " + "es un lenguaje " + "esencial para crear" + " sitios web poderosos.";
console.log(frase); */

/* agregar texto y espacio entre numeros 
let numeroString1 = "Este es 10, ";
let numeroString2 = "este es 20 ";
let numeroString3 = "y este es 30.";
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;
console.log(concatenaNumeros); */

/* agregar variable nombre y mostrar
var nombre = prompt("Escriba su nombre")
var edad = prompt("Escriba su edad")
console.warn(nombre + edad) */

/* ejercicio if
let genero;
let edad;
genero = prompt("Introduce tu genero");
edad = prompt("Introduce tu edad");
if (genero == "hombre") {
    if (edad >= 18){
        alert("Puedes entrar, eres mayor de edad.");
    } else {
        alert("No puedes entrar, eres menor de edad.");
    }
} else {
    if (edad >= 20 && genero == "mujer") {
        alert("Puedes entrar, eres mayor de edad.");
    } else {
        alert("No puedes entrar, eres menor de edad.");
    }
} */
// CLASE 11
/* plan de ejercicios por dia
let diaSemana = prompt("Ingrese dia de la semana para obtener un ejercicio")

switch (diaSemana) {
    case "lunes":
        alert("Este día vas a crear tu página html");
        break;
    case "martes":
        alert("Este día vas a empezar a editar tu página");
        break;
    case "miércoles":
        alert("Este día vas a probar titulos en tu página");
        break;
    case "jueves":
        alert("Este día vas a probar párrafos en tu página");
        break;
    case "viernes":
        alert("Este día vas a probar texto en negrita en tu página");
        break;
    case "sábado":
        alert("Este día vas a probar listas no ordenadas en tu página");
        break;
    case "domingo":
        alert("Este día vas a probar enlaces en tu página");
        break;
    default:
        alert("Escribe el día de la semana en minúsculas");
        break;
} */
/* bucle de 20 a 70
for(i=20;i<=70;i++){
    document.write("El número es: " + i + "<br>");
} */
/* Usuario ingresa valor para mostrar mensaje
let cantidad = prompt("Ingrese la cantidad")
for(i=1;i<=cantidad;i++){
    document.write("Hola Mundo" + "<br>");
} */
/* comparar
let num1 = 18
let num2 = 17
let comparacion = (num1 != num2)
console.log(comparacion) */
/* dividir
let num1 = parseInt(prompt("ingrese primer numero"));
let num2 = parseInt(prompt("ingrese segundo numero"));
let num3 = parseInt(prompt("ingrese tercer numero"));
console.log((num1 + num2 + num3)/ 3); */