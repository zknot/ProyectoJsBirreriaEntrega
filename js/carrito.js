let productosEnCarrito = localStorage.getItem("productos-en-carrito")
productosEnCarrito = JSON.parse(productosEnCarrito)


const carritoVacio = document.querySelector("#carrito-vacio")
const carritoProductos = document.querySelector("#carrito-producto")
const carritoActions = document.querySelector("#carrito-action")
const carritoCompletado = document.querySelector("#carrito-completado")
let botonesDelete = document.querySelectorAll('.carrito-producto-eliminar')
const botonVaciar = document.querySelector('#carrito-action-vaciar')

function cargarProductosCarrito() {
if (productosEnCarrito)  {


    carritoProductos.innerHTML = "";
    
    productosEnCarrito.forEach(Cervezas => {
        
        const div = document.createElement("div")
        div.classList.add("carrito-producto1")
        div.innerHTML = `
        <img class="carrito-producto-img" src="${Cervezas.img}" alt="${Cervezas.marca}">
        <div class="carrito-producto-titulo">
            <small>Titulo</small>
            <h3>${Cervezas.marca}</h3>
        </div>
        <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${Cervezas.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
            <small>Precio</small>
            <p> $${Cervezas.precio} </p>
        </div>
        <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p> $${Cervezas.precio * Cervezas.cantidad} </p>
        </div>
        <button class="carrito-producto-eliminar" id="${Cervezas.id}" ><i class="bi bi-trash3"></i></button> 
    `

    carritoProductos.append(div);

    })
    
} else {
    
    carritoVacio.classList.add("desactivado")
    carritoProductos.classList.add("desactivado")
    carritoActions.classList.add("desactivado")
    carritoCompletado.classList.remove("desactivado")
    
}
    actualizarBotonesDelete();
}

cargarProductosCarrito();

function actualizarBotonesDelete () {
    botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar')
  
    botonesEliminar.forEach(button => {
      button.addEventListener('click', botonesDelete)
    });
  }

  function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}


