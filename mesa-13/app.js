
    const formulario = document.querySelector('form');
    const campoNombre = document.getElementById('nombre');
    const labelNombre = document.querySelector('label');

    function contieneNumeros(string) {
        return /\d/.test(string);
    }

    function normalizarDatos (nombre) {
        if (nombre == "") {
            labelNombre.innerHTML = `<p style='color: red'>Campo Obligotorio</p>`;
        } else {
            let n = nombre.trim().toLowerCase().replace(/\s+/g, ' ');
            let nombreCompleto = n.split(' ');
            console.log(nombreCompleto);
            if (nombreCompleto.length == 1) {
                alert('debe colocar nombre y apellido');
            } else {
                nombreCompleto.forEach(index => {
                    if (index.length < 2) {
                        alert('El nombre no puede llevar menos de dos letras');
                    } else if (contieneNumeros(index)) {
                        alert("No se pueden ingresar numeros");
                    }
                });
            }
            
            
        }
        
        /* let n = nombre.trim().toLowerCase().replace(/\s+/g, ' ');
        let dosNombres = n.split(" ")
        console.log(dosNombres)

        dosNombres.forEach(index => {
            if (index.length < 2) {
                alert('El nombre no puede llevar menos de dos letras');
            } else if (index != NaN) {
                alert("No se pueden ingresar numeros");
            }
        }); */
    }
    
    
    
    
    
    
    
    
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        normalizarDatos(campoNombre.value);

       /*  let campoNombre = document.getElementById('nombre');
        campoNombre.value.trim().toLoverCase();
        campoNombre.value.plit(' ');
        console.log(campoNombre); */

       

    })



/* const nombreUsuario = document.querySelector("#nombre")
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

function normalizar (nombre) {
    let n = nombre.trim().toLowerCase();



    usuario.nombreCompleto = n;
    console.log(usuario);

}

formulario.addEventListener('click', (event) => {
    event.preventDefault();

    normalizar(nombreUsuario.value);
}) */



