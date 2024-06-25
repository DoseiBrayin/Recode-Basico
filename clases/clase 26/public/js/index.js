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

        setNombre: (nombre) => {
            this.nombre = nombre;
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
        }
    }
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = Usuarios();
    usuario.setNombre("Juan");
    console.log(usuario.getNombre());
});

