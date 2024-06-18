const usuarios = document.querySelector('#Usuarios');

if (localStorage.key('data') != null ){
    const usuariosGuardados = JSON.parse(localStorage.getItem('data'));
    usuarios.innerHTML =
    `<div>
        <h2>${usuariosGuardados.nombre}</h2>
        <p>${usuariosGuardados.apellido}</p>
        <p>${usuariosGuardados.email}</p>
        <button onclick="localStorage.clear()">Borrar</button>
    </div>`
}