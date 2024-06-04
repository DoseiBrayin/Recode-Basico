const pantalla = document.querySelector('.pantalla');
const sumar = document.querySelector('#suma');
const restar = document.querySelector('#restar');
const multiplicar = document.querySelector('#multiplicar');
const dividir = document.querySelector('#dividir');
const igual = document.querySelector('#igual');
const borrar = document.querySelector('#borrar');
const punto = document.querySelector('#punto');

const operaciones = document.querySelectorAll('.operaciones');

const numeros = document.querySelectorAll('.numeros');

function agregarNumero(numero) {
    pantalla.childNodes[0].nodeValue += numero;
}

function borrarNumero() {
    pantalla.childNodes[0].nodeValue = '';
}

borrar.addEventListener('click', borrarNumero);

function sumarNumeros(){
    let numeros = pantalla.childNodes[0].nodeValue.split('+');
    let resultado = 0;
    console.log(numeros);
    numeros.forEach( numero => {
        resultado += parseFloat(numero);
    });
    borrarNumero();
    return resultado;
}

function restarNumeros(){
    let numeros = pantalla.childNodes[0].nodeValue.split('-');
    let resultado = parseFloat(numeros[0]);
    numeros.shift();
    numeros.forEach( numero => {
        resultado -= parseFloat(numero);
    });
    borrarNumero();
    return resultado;
}

function resultado(operador,operacion){
    if (operador == '+'){
        agregarNumero(operacion);
    }
    if (operador == '-'){
        agregarNumero(operacion);
    }
}

operaciones.forEach( boton => {
    boton.addEventListener('click', (event) => {
        if (event.target.textContent != 'C' && event.target.textContent != '=') {
        agregarNumero(event.target.textContent);
        }
        if(event.target.textContent == '='){
            if (pantalla.childNodes[0].nodeValue.includes('+')){
               resultado('+',sumarNumeros());
            }
            if (pantalla.childNodes[0].nodeValue.includes('-')){
                resultado('+',restarNumeros());
            }
        }
    });
});

numeros.forEach( boton => {
    boton.addEventListener('click', (event) => {
        agregarNumero(event.target.textContent);
    });
});
