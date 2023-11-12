
const propiedades_alquiler = [
  {
    nombre: "Casa de Hobbit",
    src: "./assets/img/pxfuel.com.jpg",
    descripcion:
      "Este espectacular casa de 6 habitaciones está ubicado en el corazón de Hobbiton, lejos de todo. Sobretodo Mordor",
    ubicacion: " 123 Barefeet Av, Hobbiton, JR 91234",
    habitaciones: 6,
    baños: 4,
    costo: 6000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Hermosa casa familiar",
    src: "./assets/img/rowan-heuvel-bjej8BY1JYQ-unsplash.jpg",
    descripcion: " Este hermosa casa ofrece neblina permanente",
    ubicacion: "456 Midwich St, Silent Hill, PA 66699",
    habitaciones: 6,
    baños: 5,
    costo: 1500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa campestre en zona residencial",
    src: "./assets/img/scott-webb-1ddol8rgUH8-unsplash.jpg",
    descripcion:
      "Esta historica casa está ubicada en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 4,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: false,
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
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: false,
  },
];

//--------------------------------------

let html = "";

for (let propiedad of propiedades_alquiler) {
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
const ele = document.querySelector("#alquiler");
ele.innerHTML = html;
