/*SUSANA TIENE UNA VETERINARIA, QUIERE TENER DOS LISTAS DE ATENDIDOS Y NO ANTETIDOS
TODAS LAS MASCOTAS TIENEN UN NOMBRE, UNA RAZA, UN NUMERO DE CONTACTO Y UN DUEÑO

let listaAtendidos = []
let listaNoAtendidos = []

let dueño = {
    nombre:" ",
    apellido:" "
}
DEBE ENCAPSULARSE
let mascota = {
    nombre:"Rocky Ronaldo",
    raza: "criollo",
    numeroContacto: "300000123",
    dueño: dueño
    /* { nombre:"Juan",
    apellido:"Oquendo"
}
}
*/
// Compare this snippet from clases/clase%15/index.js:
/*
Entidades:
Comida: Cada comida tiene un nombre, un tipo (por ejemplo, hamburguesa, pizza, tacos), un precio y un estado (disponible o no disponible).
Cliente: Cada cliente tiene un nombre, un apellido y un número de contacto.
Restaurante de Comidas Rápidas: El restaurante tiene dos listas, una para las comidas vendidas y otra para las comidas no vendidas.
Relaciones:
Compra: Un cliente puede comprar una comida.
Disponibilidad: Una comida puede estar disponible o no disponible en el restaurante de comidas rápidas.
Funciones:
FactoryComida: Esta función crea una nueva comida con los atributos proporcionados.
FactoryCliente: Esta función crea un nuevo cliente con los atributos proporcionados.
RestauranteComidasRapidas: Esta función clasifica las comidas en dos listas, vendidas y no vendidas, en el restaurante de comidas rápidas.
*/

function FactoryMascota(nombre, raza, numeroContacto,IsAtendidos ,dueño) {
    return {
        nombre,
        raza,
        numeroContacto,
        IsAtendidos,
        dueño
    }
}

function FactoryDueño(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

let mascota = FactoryMascota("Rocky Ronaldo", 
"criollo",
 "300000123",
 true, 
 FactoryDueño("Juan", "Oquendo"))

let mascota1 = FactoryMascota("Firulais",
    "Pitbull",
    "123456",
    false,
    FactoryDueño("Miguel", "Alvarez"))

function Veterinaria(mascota) {
    let listaAtendidos = []
    let listaNoAtendidos = []
    if (mascota.IsAtendidos){
        listaAtendidos.push(mascota)
    } else{
        listaNoAtendidos.push(mascota)
    }
    return {
        listaAtendidos,
        listaNoAtendidos
    }
}

console.log(Veterinaria(mascota).listaAtendidos)
console.log(Veterinaria(mascota1).listaAtendidos)
// Path: clases/clase%2017/index.js




