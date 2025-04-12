const carritoContainer = document.getElementById('carrito-container');
const barraLateral = document.getElementById('barra-lateral');
const mensajeCarrito = document.getElementById('mensaje-carrito');
const cerrarBarra = document.querySelector('.close');
const overlay = document.getElementById('overlay');

let productos = 0;

carritoContainer.addEventListener("click", function (event) {

    //si <span class="material-symbols-outlined close">close</span>
    //contiene la clase "close"  == true
    //return, no sigue con la ejecucion
    if (event.target.classList.contains("close")) return;

    barraLateral.classList.add('visible');
    overlay.classList.add('visible');
    document.body.classList.add('no-scroll');

    if (productos === 0) {
        mensajeCarrito.textContent = 'Tu carrito está vacío';
        mensajeCarrito.style.textAlign = 'center';
        mensajeCarrito.style.marginTop = '70px';
    }
});

cerrarBarra.addEventListener("click", () => {
    barraLateral.classList.remove('visible');
    overlay.classList.remove('visible');
    document.body.classList.remove('no-scroll');
});

overlay.addEventListener("click", () => {
    barraLateral.classList.remove('visible');
    overlay.classList.remove('visible');
    document.body.classList.remove('no-scroll');
})