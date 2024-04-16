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

function FactoryMascota(nombre, raza, numeroContacto, dueño) {
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


// Path: clases/clase%2017/index.js




