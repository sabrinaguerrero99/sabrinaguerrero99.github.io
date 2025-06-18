const productos = [{
        id: 1,
        nombre: "SKIN 1004 - Aceite limpiador",
        descripcion: "Aceite limpiador multifuncional que elimina completamente el maquillaje y las impurezas de la piel, mientras le aporta una rica combinación de nutrientes. Elaborado con aceite MCT extraído del coco, extracto de centella asiática y seis aceites botánicos que ofrecen un efecto refrescante y calmante.",
        precio: 1500,
        imagen: "img/producto_01.jpg"
    },
    {
        id: 2,
        nombre: "AXIS - Y - Sérum para Manchas",
        descripcion: "Sérum con una formulación libre de crueldad y apto para veganos, sin colorantes artificiales, aceites minerales, fragancias ni parabenos, que refresca y nutre la piel con extractos de caléndula, papaya y espino amarillo, mientras ofrece efectos iluminadores con extracto de salvado de arroz.",
        precio: 1400,
        imagen: "img/producto_02.jpg"
    },
    {
        id: 3,
        nombre: "Dr. Althea - Crema hidratante 147",
        descripcion: "Hidratante calmante enriquecida con azuleno derivado de las flores de manzanilla, que ayuda a aliviar la irritación. Gracias a las ceramidas añadidas en su formulación, esta crema ofrece una hidratación duradera al fortalecer la barrera de la piel y aumentar su capacidad de retención de humedad.",
        precio: 1700,
        imagen: "img/producto_03.JPG"
    },
    {
        id: 4,
        nombre: "celimax - Ampolla Facial Noni ",
        descripcion: "CCon un 71.77% de extracto de la fruta noni rica en nutrientes, esta ampolla hidrata la piel y proporciona más luminosidad para un aspecto saludable. Infundida con aceite de romero, colágeno vegano y adenosina, la ampolla calma y revitaliza la piel mientras reduce las líneas finas y las arrugas. La fórmula de rápida absorción deja la piel con un aspecto rejuvenecido.",
        precio: 1700,
        imagen: "img/producto_04.JPG"
    },
    {
        id: 5,
        nombre: "Torriden - Sérum Hialurónico",
        descripcion: "Sérum ligero y potente, repleto de ácido hialurónico de 5D-Complex que se absorbe rápidamente para hidratar instantáneamente la piel. Ingredientes adicionales como pantenol, alantoína y madecassoside calman eficazmente la piel. El color azul pastel del sérum se deriva naturalmente del extracto de malaquita que fortifica la barrera cutánea.",
        precio: 1200,
        imagen: "img/producto_05.JPG"
    },
    {
        id: 6,
        nombre: "Dr. Althea - Crema Hidratante 345",
        descripcion: "Formulada con 10,000ppm de niacinamida, pantenol y extracto de opuntia ficus-indica stem, esta ligera crema post-acne, nutre y fortalece la piel. Infusionado con beta-glucano y ácido hialurónico para hidratar, centella asiática, houttuynia cordata y extracto de lavanda para un cuidado calmante. Este producto tiene certificado de que es vegano.",
        precio: 1650,
        imagen: "img/producto_06.JPG"
    },
    {
        id: 7,
        nombre: "Purito SEOUL - Sérum ",
        descripcion: "Anteriormente conocido como Centella Unscented Serum, este nuevo empaque de la querida fórmula de PURITO está enriquecida con extracto de cica para calmar la irritación, así como alantoína y péptidos para revitalizar la piel. La fórmula vegana se adapta a todo tipo de piel, incluida la piel sensible. El producto clínicamente probado no tiene fragancia.",
        precio: 1900,
        imagen: "img/producto_07.JPG"
    },
    {
        id: 8,
        nombre: "SKIN 1004 - Espuma ",
        descripcion: "Formulado con bicarbonato de sodio para una limpieza profunda y un 84 % de extracto de cigarra de Madagascar para beneficios calmantes e hidratantes, este limpiador en espuma elimina completamente las impurezas de la piel y deja un acabado suave y terso. Los ingredientes botánicos adicionales, incluido el aceite de coco de origen natural.",
        precio: 1350,
        imagen: "img/producto_08.JPG"
    },
    {
        id: 9,
        nombre: "Anua - Espuma Limpiadora",
        descripcion: "Limpiar tu piel con esta espuma limpiadora enriquecida con polvo de Houttuynia Cordata para eliminar las células muertas de la piel y purificar los poros. La fórmula granulada está infusionada con glicerina para hidratar la piel y ácido salicílico para proporcionar cuidado de los poros y efectos antiacné. Recomendada para pieles propensas al acné.",
        precio: 2000,
        imagen: "img/producto_09.jpg"
    },
    {
        id: 10,
        nombre: "Beauty of Joseon - Protector Solar",
        descripcion: "Equipado con SPF 50+ PA++++ de amplio espectro para defenderse de los rayos UVA y UVB, este protector solar orgánico viene en una textura de crema liviana que se absorbe rápidamente en la piel sin dejar un matiz blanco. El protector solar químico contiene niacinamida para dejar la piel radiante.",
        precio: 2500,
        imagen: "img/producto_10.JPG"
    },
    {
        id: 11,
        nombre: "TOCOBO - Protector Solar",
        descripcion: "Este protector solar híbrido de minerales y químicos en barra ofrece SPF 50+ PA++++ con protección UV. Hidrata la piel con ingredientes naturales como extracto de flor onagra vespertina y aceite de semilla de jojoba. El Protector Solar en Barra calma y controla el exceso de sebo en la piel.",
        precio: 3500,
        imagen: "img/producto_11.JPG"
    },
    {
        id: 12,
        nombre: "mixsoon - Esencia",
        descripcion: "Esencia refrescante que contiene extracto fermentado de soja para hidratar la piel y controlar la producción de sebo. También contiene extracto fermentado de granada para suavizar la textura de la piel, filtrado de fermento de semilla de cebada rico en vitaminas para revitalizar la piel y filtrado de fermento de jugo de pera para proporcionar antioxidantes a la piel.",
        precio: 2550,
        imagen: "img/producto_12.jpg"
    },
];

let carrito = [];

function cargarProductos() {
  productos.forEach(p => {
    $('#lista-productos').append(`
      <div class="col-md-4 mb-4">
          <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.nombre}</h5>
            <p class="card-text">${p.descripcion}</p>
            <p class="card-text"><strong>Precio:</strong> $${p.precio}</p>
            <button class="btn btn-primary mt-auto agregar-carrito" data-id="${p.id}">Agregar</button>
          </div>
        </div>
      </div>
    `);
  });
}


function actualizarCarrito() {
  $('#carrito-lista').empty();
  let total = 0;

  carrito.forEach(item => {
    total += item.precio * item.cantidad;
    $('#carrito-lista').append(`
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${item.nombre} x ${item.cantidad} - $${item.precio * item.cantidad}
        <div>
          <button class="btn btn-sm btn-success sumar" data-id="${item.id}">+</button>
          <button class="btn btn-sm btn-warning restar" data-id="${item.id}">-</button>
          <button class="btn btn-sm btn-danger eliminar" data-id="${item.id}">X</button>
        </div>
      </li>
    `);
  });

  $('#total').text(total);

  $('#carrito-contador').text(carrito.reduce((sum, item) => sum + item.cantidad, 0));
}

$(document).on('click', '.agregar-carrito', function() {
  const id = parseInt($(this).data('id'));
  const producto = productos.find(p => p.id === id);
  const existente = carrito.find(p => p.id === id);

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarrito();
});

$(document).on('click', '.sumar', function() {
  const id = parseInt($(this).data('id'));
  carrito.find(p => p.id === id).cantidad++;
  actualizarCarrito();
});

$(document).on('click', '.restar', function() {
  const id = parseInt($(this).data('id'));
  const item = carrito.find(p => p.id === id);
  item.cantidad--;
  if (item.cantidad <= 0) carrito = carrito.filter(p => p.id !== id);
  actualizarCarrito();
});

$(document).on('click', '.eliminar', function() {
  const id = parseInt($(this).data('id'));
  carrito = carrito.filter(p => p.id !== id);
  actualizarCarrito();
});

$('#enviar-whatsapp').click(function () {
  let mensaje = "Hola, quiero hacer un pedido en Aruma. Estos son los productos seleccionados:%0A";
  carrito.forEach(item => {
    mensaje += `- ${item.nombre} x ${item.cantidad} = $${item.precio * item.cantidad}%0A`;
  });
  mensaje += `%0A💰 Total: $${$('#total').text()}`;

  const telefono = "5491159614982"; // Número sin espacios ni guiones
  const url = `https://wa.me/${telefono}?text=${mensaje}`;

  window.open(url, '_blank');
});


cargarProductos();
