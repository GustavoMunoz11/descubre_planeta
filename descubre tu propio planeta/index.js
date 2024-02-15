var btn_discover = document.getElementById("discover");
var cientifica = document.getElementById("cientifica");
var mensajes = document.getElementById("mensajes");

cientifica.addEventListener("mouseenter", mensaje);
cientifica.addEventListener("mouseleave", hidemensaje);
btn_discover.addEventListener("click", discoverPlanet);

function mensaje() {
  mensajes.classList.add("show-mensajes");
}

function hidemensaje() {
  mensajes.classList.remove("show-mensajes");
}

// imagenes
var planet_container = document.getElementById("planet_container");
var clase = document.getElementById("img-clase");
var superficie = document.getElementById("superficie");
var luna = document.getElementById("luna");
var anillos = document.getElementById("anillos");
var nubes = document.getElementById("nubes");
var tamaño = document.getElementById("tamaño");

function discoverPlanet() {
  let current_class = Math.floor(Math.random() * 6);
  clase.src = `./img/planetas/clase${current_class}.svg`;

  let current_sur = Math.floor(Math.random() * 3);
  superficie.src = `./img/planetas/superficie${current_sur}.svg`;

  let current_moon = Math.floor(Math.random() * 2);
  luna.src = `./img/planetas/luna${current_moon}.svg`;

  let current_rings = Math.floor(Math.random() * 2);
  anillos.src = `./img/planetas/anillos${current_rings}.svg`;

  let current_clouds = Math.floor(Math.random() * 2);
  nubes.src = `./img/planetas/nubes${current_clouds}.svg`;
}
