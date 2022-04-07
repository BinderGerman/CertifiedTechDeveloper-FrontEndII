/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado
- implmentar el evento "submit", utilizarlo para guardar el comentario en un array
- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)
- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

const formulario = document.querySelector("form");
const inputComentario = document.getElementById("comentario");
const deleteComentario = document.getElementById("borrar-comentarios");
const comentariosRealizados = document.querySelector(".comentarios");
const arrayDeComentarios = [];

function guardarComentario (nuevoComentario) {
    arrayDeComentarios.push(nuevoComentario);
    localStorage.setItem('comentarios realizados', JSON.stringify(arrayDeComentarios));
}

function renderizarComentarios () {

    let historialDeComentarios = JSON.parse(localStorage.getItem('comentarios realizados'));
    comentariosRealizados.innerHTML = "";

    if (!historialDeComentarios) {
        historialDeComentarios = [];
    } else {
        let p = document.createElement('p');
        p.innerText = historialDeComentarios;
        comentariosRealizados.appendChild(p);
    }

    /* return historialDeComentarios; */
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    guardarComentario(inputComentario.value);
    renderizarComentarios();

    formulario.reset();
})

deleteComentario.addEventListener('click', () => {
    localStorage.removeItem('comentarios realizados');
    comentariosRealizados.innerHTML = ``;
})




