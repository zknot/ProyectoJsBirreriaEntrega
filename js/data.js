class Cervezas {
    constructor(id, marca, precio, descripcion, img){
        this.id = id
        this.marca = marca
        this.precio = precio
        this.descripcion = descripcion
        this.img = img
        }
}

const schneider = new Cervezas('01', 'Schneider', 1000, 'Suaves aromas frutados, donde se puede percibir una leve nota sulfurosa (fresca). Suave sabor a malta. Color dorado claro y espuma blanca. Leve dulzor y amargo suave a moderado. Suave, no áspera ni astringente. Moderado balance.', './img/pack01.jpg')
const brahma = new Cervezas('02', 'Brahma', 900, 'Brahma es una cerveza brasilera, esta Pils rubia te seducirá por su sabor ligero y refrescante, ¡además de su pizca de papaya en nota final! Quiere transmitir la actitud y el estilo de vida de los brasileños a los consumidores del mundo entero.', './img/pack02.jpg')
const quilmes = new Cervezas('03', 'Quilmes', 800,'Cerveza lager argentina, elaborada con ingredientes nacionales. Con equilibrio entre el suave amargor del lúpulo y el sabor del cereal. Color amarillo dorado brillante. Es una cerveza equilibrada, de gran refrescancia y cuerpo balanceado, que marida con platos más bien grasosos o pesados.', './img/pack03.jpg')
const budweiser = new Cervezas('04', 'Budweiser', 1100, 'Cerveza de color dorado pálido, clara y brillante y con una espuma blanca cremosa y consistente. Se perciben ligeras notas afrutadas a plátano y frutas maduras, con aromas menos intensos a grano tostado y caramelo y un suave toque de fondo herbal.', './img/pack04.png')

