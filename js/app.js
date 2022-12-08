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

let productosEnCarrito = []

function agregarAlCarrito(e) {

  const idButton = e.currentTarget.id;
  const productoAgregado = totalCervezas.find(Cervezas => Cervezas.id === idButton)

  if(productosEnCarrito.some(Cervezas => Cervezas.id === idButton)){ 
      const index = productosEnCarrito.findIndex(Cervezas => Cervezas.id === idButton)
      productosEnCarrito[index].cantidad++
    } else {
    productoAgregado.cantidad = 1
    productosEnCarrito.push(productoAgregado)
  }

  actNumero()

  localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito))

}

function actNumero () {
  let newNumero = productosEnCarrito.reduce((acc, Cervezas) => acc + Cervezas.cantidad, 0)
  numero.innerText = newNumero
}


// console.log(botonesAgregar); --- Reactivar

// // Array Cervezas
// const totalCerveza = [schneider, brahma, quilmes, budweiser]

// // Funciones

// const menuCervezas = document.querySelector('#menuCervezas')
// const button = document.querySelector('.button')
// const producto01 = document.querySelector('.producto01')


// const mostrarCerveza = (e) => {
// //console.log(e.target);
// const idCervezaSeleccionada = e.target.closest('div').getAttribute('data-id')
// console.log(idCervezaSeleccionada);
// const cervezaSeleccionada = totalCerveza.find((cerveza) => cerveza.id == idCervezaSeleccionada)
// console.log(cervezaSeleccionada);

// //cervezaSeleccionada.textContent = `#${cervezaSeleccionada.id}`
// button.setAttribute('data-id', cervezaSeleccionada)

// console.log(cervezaSeleccionada);
    
// }


// const cargarProductos = () => {
//     totalCerveza.forEach((cerveza) => {
//         const listaProductos = document.createElement('div');
//         listaProductos.classList.add('producto01')
//         listaProductos.setAttribute('data-id', cerveza.id)
//         listaProductos.innerHTML = `
//         <img src="${Cerveza.img}" alt="Producto1">
//         <h3 class="productoTitulo">${Cerveza.marca}</h3>^
//         <p class="cantidadLatas">${Cerveza.cantidad}</p>
//         <p class="productoPrecio">${Cerveza.precio}</p>
//         <button class= "button01" > Comprar </button>`
        
        
//         menuCervezas.append(listaProductos)  
        
//     })
    
//     const listaProductos1 = document.querySelectorAll('.producto01')
//     console.log(listaProductos1);
//     listaProductos1.forEach((button) => {
//         button.addEventListener('click', mostrarCerveza)
//     })
    
    
    
// }

// const agregarCerveza = (e) => {
//     console.log(e.target);
//     button.addEventListener('click', agregarCerveza)
    
// }


// cargarProductos()