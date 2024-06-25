const formulario = document.querySelector('.aggUsuario');


const agregaLocalStorage = (usuario) => {
    try {
        localStorage.setItem('usuario', JSON.stringify(usuario));
    } catch (error) {
        console.error(error.message);
    }
}

const obtenerLocalStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('usuario'));
    } catch (error) {
        console.error(error.message);
    }
}

const Usuarios = () => {
    return {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        url: '',

        Usuario: (nombre, apellido, email, password, url) => {
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
            this.password = password;
            this.url = url;
        },

        getNombre: () => {
            return this.nombre;
        },

        jsonToHtml: () => {
            return `
                <div class="card" style="width: 18rem;">
                    <img src="${this.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title
                        ">${this.nombre} ${this.apellido}</h5>
                        <p class="card-text">${this.email}</p>
                </div> `
        },

    }
}



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = Usuarios();
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const img = document.querySelector('#img').value;

    const section = document.querySelector('.usuarios');

    usuario.Usuario(
        nombre,
        apellido,
        email,
        password,
        img
    );

    section.innerHTML += usuario.jsonToHtml();

});

