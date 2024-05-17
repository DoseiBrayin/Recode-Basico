const inputNombre = document.querySelector('#inputNombre')
const inputApellido = document.querySelector('#inputApellido')
const inputCedula = document.querySelector('#inputCedula')
const inputFecha = document.querySelector('#inputNacimiento')

const btnGuardar = document.querySelector('#btnAdd')

const usuarios = document.querySelector('.usuarios')



btnGuardar.addEventListener('click', () => {
    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const cedula = inputCedula.value
    const fecha = inputFecha.value


    if (!nombre || !apellido || !cedula || !fecha) {
        alert('Por favor llene todos los campos')
        return
    }

    const usuario = document.createElement('div')
    usuario.classList.add('usuario')
    usuario.innerHTML = `
        <h2>${nombre} ${apellido}</h2>
        <p>Cédula: ${cedula}</p>
        <p>Fecha de nacimiento: ${fecha}</p>
    `
    usuarios.appendChild(usuario)

})
