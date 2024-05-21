const formulario = document.querySelector('.form');
const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password'); 
const inputEdad = document.querySelector("#edad")
const btnSubmit = document.querySelector('#submit');


formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const email = inputEmail.value;
    const password = inputPassword.value;
    const edad = inputEdad.value;
    alert(`Nombre: ${nombre.toLowerCase()} 
            Apellido: ${apellido.toUpperCase()}
            Email: ${email}
            password: ${password}
            Edad: ${edad > 18 ? "mayor" : "menor"}`)

});


