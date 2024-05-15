const inputContenido = document.querySelector('#inputContenido')
const btnAgregar = document.querySelector('#btnAdd')
const tarjeta = document.querySelector('.tarjeta')
const tarjetas = document.querySelector('.tarjetas')

btnAgregar.addEventListener('click', () => {
    contenido = inputContenido.value
    tarjeta_clone = tarjeta.cloneNode(true)
    tarjeta_clone.firstElementChild.innerHTML = contenido
    tarjeta_clone.className = 'targeta'
    tarjeta_clone.style.backgroundColor = 'blue'
    tarjetas.appendChild(tarjeta_clone)
})