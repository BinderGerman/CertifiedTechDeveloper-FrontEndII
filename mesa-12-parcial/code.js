/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = prompt("Ingresa el año en que naciste");
  datosPersona.ciudad = prompt("Ingresa tu ciudad");
  datosPersona.interesPorJs = confirm("Te gusta JavaScript");

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  const name = document.getElementById("nombre");
  name.innerText = datosPersona.nombre;
  const today = new Date();
  const year = today.getFullYear();
  const age = document.getElementById("edad");
  age.innerText = year - datosPersona.edad;
  const city = document.getElementById("ciudad");
  city.innerText = datosPersona.ciudad;
  const js = document.getElementById("javascript");
  if (datosPersona.interesPorJs) {
    js.innerText = "SI";
  } else {
    js.innerText = "NO";
  }
}



function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const divContainer = document.getElementById("fila");
  divContainer.innerHTML = "";

  listado.forEach(i => {
  const card = document.createElement("div");
  card.classList.add("caja");
  const image = document.createElement("img");
  image.setAttribute("src", `${i.imgUrl}`);
  const paragraphOne = document.createElement("p");
  paragraphOne.classList.add("lenguajes");
  paragraphOne.innerText = i.lenguajes;
  const paragraphTwo = document.createElement("p");
  paragraphTwo.classList.add("bimestre");
  paragraphTwo.innerText = i.bimestre;

  card.appendChild(image);
  card.appendChild(paragraphOne);
  card.appendChild(paragraphTwo);
  divContainer.appendChild(card);
  })
}


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.querySelector("#sitio").classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener("keypress", function(e) {
  if (e.key == "f") {
    const myInput = document.getElementById("sobre-mi");
    myInput.classList.remove("oculto");
  }
})
