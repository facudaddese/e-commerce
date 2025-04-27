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

// Variable para guardar el producto seleccionado
let productoSeleccionado = null;

// Guardo la cantidad de productos agregados
let contadorProductos = Number(sessionStorage.getItem('contador')) || 0;
// Mantengo la cantidad de productos al pasar de pestaña
contador.textContent = contadorProductos;

// Cuando se toque el carrito, se abre la barra-lateral
carritoContainer.addEventListener("click", function (event) {
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

// Creo una funcion reutilizable para cerrar la barra-lateral (carrito) y la pestaña de agregar productos al mismo
function cerrar() {
    barraLateral.classList.remove('visible');
    overlay.classList.remove('visible');
    document.body.classList.remove('no-scroll');
    productosContenedor.classList.remove('visible');
}

// Cuando se toque la X se cierra la barra-lateral (carrito)
cerrarCarrito.addEventListener("click", () => {
    cerrar();
});

// Cuando se toque la pantalla principal, se cierra la barra-lateral (carrito)
overlay.addEventListener("click", () => {
    cerrar();
});

// Recorro c/u de los productos 
let productos = {};
cards.forEach(card => {
    card.addEventListener("click", () => {
        productosContenedor.classList.add('visible');
        overlay.classList.add('visible');
        document.body.classList.add('no-scroll');

        // Obtengo la img de cada producto
        const imgSrc = card.querySelector('img').src;
        // Obtengo el titulo de cada producto
        const titulo = card.querySelector('h5').textContent;
        // Obtengo el precio de cada producto
        const precio = card.querySelector('h6').textContent;

        // Se lo asigno a la img
        productoImg.src = imgSrc;
        // Se lo asigno al titulo
        productoTitulo.textContent = titulo;
        // Se lo asigno al precio
        productoPrecio.textContent = precio;

        // Se guarda el producto seleccionado en la variable
        productoSeleccionado = {
            nombre: titulo,
            precio: precio,
            imagen: imgSrc
        };
    });
});

btnAgregar.addEventListener("click", () => {
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

    // Aquí estamos agregando el producto seleccionado correctamente
    if (productoSeleccionado) {
        carrito.push(productoSeleccionado);
        sessionStorage.setItem('carrito', JSON.stringify(carrito));

        contadorProductos++;
        contador.textContent = contadorProductos;
        sessionStorage.setItem('contador', contadorProductos);

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto agregado con éxito!",
            showConfirmButton: false,
            timer: 1450
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No has seleccionado ningún producto para agregar.",
        });
    }
});

btnEliminar.addEventListener("click", () => {
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

    if (productoSeleccionado) {
        const productoEnCarrito = carrito.find(producto => producto.nombre === productoSeleccionado.nombre);

        if (productoEnCarrito) {
            // Si el producto está en el carrito, lo elimino
            carrito = carrito.filter(producto => producto.nombre !== productoSeleccionado.nombre);
            sessionStorage.setItem('carrito', JSON.stringify(carrito));

            // Actualizo el contador
            contadorProductos = carrito.length;
            contador.textContent = contadorProductos;
            sessionStorage.setItem('contador', contadorProductos);

            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Producto eliminado con éxito!",
                showConfirmButton: false,
                timer: 1450
            });
        } else {
            // Si el producto no está en el carrito
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Este producto no está en el carrito.",
            });
        }
    } else {
        // Si no hay un producto seleccionado
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No has seleccionado ningún producto para eliminar.",
        });
    }
});

cerrarCard.addEventListener("click", () => {
    cerrar();
});

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

btnFinalizar.addEventListener("click", () => {
    Swal.fire({
        title: "Deseas finalizar la compra?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, finalizar compra"
    }).then((result) => {
        if (result.isConfirmed) {

            Swal.fire({
                title: "Compra finalizada!",
                text: "Nos estaremos comunicando a la brevedad.",
                icon: "success"
            });
        }
    })
})