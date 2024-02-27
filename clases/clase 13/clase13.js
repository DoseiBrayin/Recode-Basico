// Var -> Globales
// Let -> Del momento o de la seccion de codigo
// Const -> Constante

// TIPOS DE DATOS
var nombre = "Juan";
var edad = 30;
var monto = 1000.89;
var numero = BigInt(10000000000000000);
var activo = true;
var hijos = null;
var hijos2 = undefined;
var fecha = new Date();
var objeto = {
    nombre: "Juan",
    edad: 30
};
var colores = ["Rojo", "Verde", "Azul","Amarillo","Rosado"];

// OPERADORES
var suma = 5 + 5;
var resta = 5 - 5;
var multiplicacion = 5 * 5;
var division = 5 / 5;
var modulo = 5 % 5;

// OPERADORED LOGICOS
var and = true && true;
var or = true || false;

// OPERADORES DE COMPARACION
var igual = 5 == "5";
var igualTipo = 5 === "5";
var diferente = 5 != "5"; 
var diferenteTipo = 5 !== "5";
var mayor = 5 > 5;
var menor = 5 < 5;
var mayorIgual = 5 >= 5;
var menorIgual = 5 <= 5;

// CONDICIONALES
// ESTRUCTURA IF => IF (CONDICION) { BLOQUE DE CODIGO }
if (5 > 5) {
    console.log("Es mayor");
}

if (mayorIgual) {
    console.log("Es mayor");
}

if(edad >= 18 && nombre === "Juan") {
    console.log("Juan es mayor de edad");
}

// LISTAS 








