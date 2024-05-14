const tarjetas = document.querySelector('.tarjetas');
const btnClick = document.querySelector('#btnClick');
const tarjeta = document.querySelector('.tarjeta');

btnClick.addEventListener('click', () => {
    tarjetas.appendChild(tarjeta.cloneNode(true))
});