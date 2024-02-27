//Funcion que devuelve algo
function sumar(a, b){
    let resultado = a + b;
    return resultado;
}

let resultado = sumar(5, 3);
console.log(resultado);

//Funcion que no devuelve nada
function imprimirMensaje(){
    console.log("Hola mundo");
}

imprimirMensaje();

function restar(a, b){
    return a - b;
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < 12; i++){
    console.log(lista[i]);
}

//UNA FUNCION CON 
//PARAMETROS LA LISTA Y UN NUMERO N=CUALQUIER NUMERO
//LA FUNCION DEVUELVE LOS N NUMERO AGREGADOS A LA LISTA 
