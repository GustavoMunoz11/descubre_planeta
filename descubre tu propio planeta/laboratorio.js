// Botones
var btn_class = document.getElementById("btn-clase");
var btn_surface = document.getElementById("btn-superficie");
var btn_moon = document.getElementById("btn-luna");
var btn_rings = document.getElementById("btn-anillos");
var btn_clouds = document.getElementById("btn-nubes");
var btn_size = document.getElementById("btn-tamaño");

// imagenes
var planet_container = document.getElementById("planet_container");
var clase = document.getElementById("img-clase");
var superficie = document.getElementById("superficie");
var luna = document.getElementById("luna");
var anillos = document.getElementById("anillos");
var nubes = document.getElementById("nubes");
var tamaño = document.getElementById("tamaño");

var clicks = 0;

btn_class.addEventListener("click", cambioClase);
btn_surface.addEventListener("click", cambioSur);
btn_moon.addEventListener("click", cambioMoon);
btn_rings.addEventListener("click", cambioRings);
btn_clouds.addEventListener("click", cambioClouds);
btn_size.addEventListener("click", cambioSize);

let current_class = 0;
function cambioClase() {
  current_class++;
  clase.src = `./img/planetas/clase${current_class % 6}.svg`;
}

let current_sur = 0;
function cambioSur() {
  current_sur++;
  superficie.src = `./img/planetas/superficie${current_sur % 3}.svg`;
}

let current_moon = 0;
function cambioMoon() {
  current_moon++;
  luna.src = `./img/planetas/luna${current_moon % 2}.svg`;
}

let current_rings = 0;
function cambioRings() {
  current_rings++;
  anillos.src = `./img/planetas/anillos${current_rings % 2}.svg`;
}

let current_clouds = 0;
function cambioClouds() {
  current_clouds++;
  nubes.src = `./img/planetas/nubes${current_clouds % 2}.svg`;
}

function cambioSize() {
  if (clicks == 0) {
    planet_container.style.width = "28%";
    planet_container.style.height = "40%";
    planet_container.style.marginTop = "5%";
    planet_container.style.marginRight = "0%";
    planet_container.style.marginLeft = "3%";
    planet_container.style.marginBottom = "0%";
    clicks = 2;
  } else if (clicks == 2) {
    planet_container.style.width = "50%";
    planet_container.style.height = "75%";
    planet_container.style.marginTop = "-7%";
    planet_container.style.marginRight = "0%";
    planet_container.style.marginLeft = "-5%";
    planet_container.style.marginBottom = "0%";
    clicks = 3;
  } else {
    planet_container.style.width = "38%";
    planet_container.style.height = "60%";
    planet_container.style.marginTop = "0%";
    planet_container.style.marginRight = "0%";
    planet_container.style.marginLeft = "0%";
    planet_container.style.marginBottom = "0%";
    clicks = 0;
  }
}
