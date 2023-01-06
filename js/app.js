const contProductos = document.querySelector('#cont-productos')
const totalCervezas = [schneider, brahma, quilmes, budweiser]
let botonesAgregar = document.querySelectorAll('.producto-agregar')
const numero = document.querySelector('#numero')

const cargarProductos = (totalCervezas) => {
    
  contProductos.innerHTML = "";
  
  totalCervezas.forEach(Cervezas => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src="${Cervezas.img}" alt="${Cervezas.marca}">
          <div class="producto-detalle">
            <h3 class="producto-titulo">${Cervezas.marca}</h3>
            <p class="product-precio">$${Cervezas.precio}</p>
            <button class="producto-agregar" id="${Cervezas.id}">Agregar</button>
          </div>
          `
          contProductos.append(div);
    });
 
    actualizarBotonesAgregar()
  }
  
  
cargarProductos(totalCervezas)

function actualizarBotonesAgregar () {
  botonesAgregar = document.querySelectorAll('.producto-agregar')

  botonesAgregar.forEach(button => {
    button.addEventListener('click', agregarAlCarrito)
  } )
}

let productosEnCarrito

const productosEnCarritoLs = (localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLs) {
  productosEnCarrito = JSON.parse(productosEnCarritoLs)
  actNumero();
} else {
  productosEnCarrito = [];
}


function agregarAlCarrito(e) {

  const idButton = e.currentTarget.id;
  const productoAgregado = totalCervezas.find(Cervezas => Cervezas.id === idButton)

  if(productosEnCarrito.some(Cervezas => Cervezas.id === idButton)){ 
      const index = productosEnCarrito.findIndex(Cervezas => Cervezas.id === idButton)
      productosEnCarrito[index].cantidad++;
    } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado)
  }

console.log(productosEnCarrito);

  actNumero()

  localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito))

}

function actNumero () {
  let newNumero = productosEnCarrito.reduce((acc, Cervezas) => acc + Cervezas.cantidad, 0)
  numero.innerText = newNumero
}