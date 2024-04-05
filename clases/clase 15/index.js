/*SUSANA TIENE UNA VETERINARIA, QUIERE TENER DOS LISTAS DE ATENDIDOS Y NO ANTETIDOS
TODAS LAS MASCOTAS TIENEN UN NOMBRE, UNA RAZA, UN NUMERO DE CONTACTO Y UN DUEÑO
*/

let listaAtendidos = []
let listaNoAtendidos = []

let dueño = {
    nombre:" ",
    apellido:" "
}
/* DEBE ENCAPSULARSE*/
let mascota = {
    nombre:"Rocky Ronaldo",
    raza: "criollo",
    numeroContacto: "300000123",
    dueño: dueño
    /* { nombre:"Juan",
    apellido:"Oquendo"
}*/
}

let mascota1 = mascota
let mascota2 = mascota
let mascota3 = mascota

mascota1.nombre = "Firulais"
mascota1.raza = "Pitbull"
mascota1.numeroContacto = "123456"
mascota1.dueño.nombre = "Miguel"
mascota1.dueño.apellido = "Alvarez"

listaAtendidos.push(mascota)

listaAtendidos.push(mascota1)

listaAtendidos.push(mascota2)

listaAtendidos.push(mascota3)
console.log(listaAtendidos)

