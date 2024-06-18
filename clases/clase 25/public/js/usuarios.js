const formulario = document.querySelector('#form');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function saveLocalStorage(data){
    localStorage.setItem('data', JSON.stringify(data));
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    try {
        if(nombre.value == '' || apellido.value == '' || email.value == '' || password.value == ''){
            throw new Error('Todos los campos son obligatorios');
        }
        if(password.value.length < 8){
            throw new Error('La contraseña debe tener al menos 8 caracteres');
        }
        const data = {
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
            password: password.value
        }
        saveLocalStorage(data);
    } catch (error) {
        alert(error.message)
    }
});