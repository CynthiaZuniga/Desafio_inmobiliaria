
const propiedades_venta = [
  {
    nombre: "Casa de veraneo en zona exclusiva",
    src: "./assets/img/frames-for-your-heart.jpg",
    descripcion:
      "Este casa de lujo está equipada con todo lo necesario para unas vacaciones indefinidas",
    ubicacion: "2050 Kamehame St, Honolulu, HI 96815",
    habitaciones: 6,
    baños: 4,
    costo: 10000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Acogedora cabaña en la montaña",
    src: "./assets/img/pxfuel.com_1.jpg",
    descripcion: "Este acogedora cabaña está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 1,
    baños: 1,
    costo: 1000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casita de chocolate de la Bruja",
    src: "./assets/img/pxfuel.com_2.jpg",
    descripcion:
      "Este penthouse de lujo ofrece deliciosos postres en cada habitación. Atención preferencial a niños",
    ubicacion: "567 Evergreen, Fairy City, CA 56789",
    habitaciones: 15,
    baños: 10,
    costo: 15500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
];

//--------------------------------------

let html = "";

for (let propiedad of propiedades_venta) {
  let smoke_temporal = "";
  let pet_temporal = "";
  if (propiedad.smoke) {
    smoke_temporal = `<p class="text-success">
      <i class="fas fa-smoking"></i> Permitido fumar
    </p>`;
  } else {
    smoke_temporal = `<p class="text-danger">
      <i class="fas fa-smoking-ban"></i> No se permite fumar
    </p>`;
  }
  if (propiedad.pets) {
    pet_temporal = `<p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>`;
  } else {
    pet_temporal = `<p class="text-danger">
    <i class="fa-solid fa-ban"></i> No se permiten mascotas
  </p>`;
  }

  html += `<div class="col-md-4 mb-4">
    <div class="card">
      <img
        src=${propiedad.src}
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${propiedad.nombre}
        </h5>
        <p class="card-text">
          ${propiedad.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedad.baño} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        ${smoke_temporal}
        ${pet_temporal}
      </div>
    </div>
  </div>
  `;
}

// Acá se imprime el arreglo de objetos en el HTML
const ele = document.querySelector("#ventas");
ele.innerHTML = html;
