const nombreUsuario = document.querySelector("#nombre")
const contraUsuario = document.querySelector("#pass")
const telefonoUsuario = document.querySelector("#tel")
const formulario = document.querySelector("form")
const checkboxes = document.querySelectorAll("input[type=checkbox]")
const radio = document.querySelectorAll("input[type=radio]")

let usuario = {
    nombreCompleto: "",
    contrasenia: "",
    tel: "",
    hobbiesSeleccionados: [],
    nacionalidad: ""
}

function normalizar(nombre) {
    usuario.nombreCompleto = nombre.trim().toLowerCase()
}

function validarTel(tele) {
     !isNaN(tele) ? usuario.tel = parseInt(tele) : null
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    usuario.contrasenia = contraUsuario.value
    normalizar(nombreUsuario.value)
    validarTel(telefonoUsuario.value)

    checkboxes.forEach(hobbie => {
        // console.log(hobbie.id)
        hobbie.checked ? usuario.hobbiesSeleccionados.push(hobbie.id) : null
    })

    radio.forEach(nac => {
        // console.log(nac.checked)
        nac.checked ? usuario.nacionalidad = nac.id.toUpperCase() : null
    })

    console.log(usuario)
})




