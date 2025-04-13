const carritoContainer = document.getElementById('carrito-container');
const barraLateral = document.getElementById('barra-lateral');
const contador = document.getElementById('contador');
const mensajeCarrito = document.getElementById('mensaje-carrito');
const cerrarCarrito = document.querySelector('.close');
const overlay = document.getElementById('overlay');

const cards = document.querySelectorAll('.card');
const productosContenedor = document.getElementById('productos');
const cerrarCard = document.querySelector('#productos .close');
const productoImg = document.getElementById('producto-img');
const productoTitulo = document.getElementById('producto-titulo');
const productoPrecio = document.getElementById('producto-precio');

//cuando se toque el carrito, se abre la barra-lateral
carritoContainer.addEventListener("click", function (event) {

    //si <span class="material-symbols-outlined close">close</span>
    //contiene la clase "close"  == true
    //return, no sigue con la ejecucion
    if (event.target.classList.contains("close")) return;

    barraLateral.classList.add('visible');
    overlay.classList.add('visible');
    document.body.classList.add('no-scroll');

    // mensajeCarrito.textContent = 'Tu carrito está vacío';
    // mensajeCarrito.style.textAlign = 'center';
    // mensajeCarrito.style.marginTop = '70px';
});

//creo funciones reutilizables
function cerrar() {
    barraLateral.classList.remove('visible');
    overlay.classList.remove('visible');
    document.body.classList.remove('no-scroll');
    productosContenedor.classList.remove('visible');
}

//cuando se toque la X se cierra la barra-lateral (carrito)
cerrarCarrito.addEventListener("click", () => {
    cerrar();
});

//cuando se toque la pantalla principal, se cierra la barra-lateral (carrito)
overlay.addEventListener("click", () => {
    cerrar();
})

//recorro c/u de los productos 
cards.forEach(element => {
    element.addEventListener("click", () => {
        productosContenedor.classList.add('visible');
        overlay.classList.add('visible');
        document.body.classList.add('no-scroll');

        //obtengo la img
        const imgSrc = element.querySelector('img').src;
        //obtengo el titulo
        const titulo = element.querySelector('h5').textContent;
        //obtengo el precio
        const precio = element.querySelector('h6').textContent;

        //se lo asigno a la img
        productoImg.src = imgSrc;
        //se lo asigno al titulo
        productoTitulo.textContent = titulo;
        //se lo asigno al precio
        productoPrecio.textContent = precio;

        const btn = document.getElementById('btn');
        btn.addEventListener("click", () => {
            productos++;
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Producto agregado con éxito!",
                showConfirmButton: false,
                timer: 1700
            });
        });
    })
});

cerrarCard.addEventListener("click", () => {
    cerrar();
})

