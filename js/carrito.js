const carritoContainer = document.getElementById('carrito-container');
const barraLateral = document.getElementById('barra-lateral');
const contador = document.getElementById('contador');
const mensajeCarrito = document.getElementById('mensaje-carrito');
const gridCarrito = document.getElementById('grid-carrito');
const btnVaciar = document.getElementById('vaciar');
const btnFinalizar = document.getElementById('finalizar');
const cerrarCarrito = document.querySelector('.close');
const overlay = document.getElementById('overlay');
const cards = document.querySelectorAll('.card');
const productosContenedor = document.getElementById('productos');
const cerrarCard = document.querySelector('#productos .close');
const productoImg = document.getElementById('producto-img');
const productoTitulo = document.getElementById('producto-titulo');
const productoPrecio = document.getElementById('producto-precio');
const btnAgregar = document.getElementById('btn-agregar');
const btnEliminar = document.getElementById('btn-eliminar');

//guardo la cantidad de productos agregados
let contadorProductos = Number(sessionStorage.getItem('contador')) || 0;
//mantengo la cantidad de productos al pasar de pestaña
contador.textContent = contadorProductos;

//cuando se toque el carrito, se abre la barra-lateral
carritoContainer.addEventListener("click", function (event) {

    //si <span class="material-symbols-outlined close">close</span>
    //contiene la clase "close"  == true
    //return, no sigue con la ejecucion
    if (event.target.classList.contains("close")) return;

    barraLateral.classList.add('visible');
    overlay.classList.add('visible');
    document.body.classList.add('no-scroll');

    if (contadorProductos == 0) {
        mensajeCarrito.textContent = 'Tu carrito está vacío';
        mensajeCarrito.classList.add('empty-carrito');
    } else {
        mensajeCarrito.textContent = 'Mi compra';
        mensajeCarrito.classList.add('full-carrito');
        gridCarrito.classList.remove('oculto');
    }
});

//creo una funcion reutilizable para cerrar la barra-lateral (carrito) y la pestaña de agregar productos al mismo
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
let productos = {};
cards.forEach(card => {
    card.addEventListener("click", () => {
        productosContenedor.classList.add('visible');
        overlay.classList.add('visible');
        document.body.classList.add('no-scroll');

        //obtengo la img de cada producto
        const imgSrc = card.querySelector('img').src;
        //obtengo el titulo de cada producto
        const titulo = card.querySelector('h5').textContent;
        //obtengo el precio de cada producto
        const precio = card.querySelector('h6').textContent;

        //se lo asigno a la img
        productoImg.src = imgSrc;
        //se lo asigno al titulo
        productoTitulo.textContent = titulo;
        //se lo asigno al precio
        productoPrecio.textContent = precio;

        productos = {
            nombre: titulo,
            precio: precio,
            imagen: imgSrc
        }
    })
});

btnAgregar.addEventListener("click", () => {
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

    carrito.push(productos);
    sessionStorage.setItem('carrito', JSON.stringify(carrito));

    contadorProductos++;
    contador.textContent = contadorProductos;
    sessionStorage.setItem('contador', contadorProductos);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto agregado con éxito!",
        showConfirmButton: false,
        timer: 1200
    });
});

btnEliminar.addEventListener("click", () => {
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por el momento no hay productos en el carrito!",
        });
    } else {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Producto eliminado con éxito!",
            showConfirmButton: false,
            timer: 1200
        });
    }

    carrito = carrito.filter(producto => producto.nombre !== productos.nombre);
    sessionStorage.setItem('carrito', JSON.stringify(carrito));

    contadorProductos = carrito.length;
    contador.textContent = contadorProductos;
    sessionStorage.setItem('contador', contadorProductos);
});
cerrarCard.addEventListener("click", () => {
    cerrar();
})

btnVaciar.addEventListener("click", () => {
    Swal.fire({
        title: "Estás seguro que quieres vaciar el carrito?",
        text: "Perderás los productos almacenados!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, vaciar carrito"
    }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.removeItem('carrito');
            sessionStorage.setItem('contador', 0);

            mensajeCarrito.textContent = 'Tu carrito está vacío';
            gridCarrito.classList.add('oculto'); 

            Swal.fire({
                title: "Carrito vacío!",
                text: "Tus productos han sido eliminados del carrito.",
                icon: "success"
            });

            contadorProductos = 0;
            contador.textContent = contadorProductos;
        }
    });
});

