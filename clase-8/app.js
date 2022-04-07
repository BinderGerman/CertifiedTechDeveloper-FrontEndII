//TEMAS : SCOPE DE LAS VARIABLES, DATOS MUTABLES/INMUTABLES, TIPOS DE FUNCIONES, SETINTERVAL, SETTIMEOUT

// var => NO RECOMENDADA

// Ambas manejan el mismo SCOPE. ¿Que significa esto?
// Con cada bloque de codigo, creamos un nuevo scope(ambito),
//entonces el dato almacenado podra accederse desde afuera hacia adentro, pero no en el sentido contrario 

//¿Cual es la diferencia entonces?
// let => Permite reasignar la variable a otro dato. El dato seria mutable. 
// const  => No se permite reasignar la variable a otro dato. El dato seria inmutable.

//Ejemplos sobre SCOPE (igual con let y con const):
//Este log lo veriamos correctamente:
let n = 1
function verNum() {
    console.log(n)
}

//Tendremos un error: 
function verNum() {
    let n = 1
}
console.log(n)

//Ejemplos sobre Mutabilidad/inmutabilidad:
let i = 1
function mutable() {
    i = 2
}
console.log(i)

const j = 1
function inmutable() {
    j = 2
}
console.log(j)


//Tipos de funciones: declaradas y expresadas
//Declaradas. Podemos invocarla donde queramos en todo nuestro codigo
Hola()
function Hola() {
    alert("hola")
}

//Expresadas. Almacenamos en una variable la funcion y solo la invocamos despues de su creacion

let Hola = function() {
    alert("hola")
}
Hola()

//CONTADOR

let num = 0
let div = document.querySelector("#number1")
let anchor = document.querySelector("#link")

//Event handlers parte I

//Evento de click
button.onclick = function() {
    div.innerText = num++
}
//Evento de mouse
button.onmouseover = function() {
    div.innerText = num++
}

 //Event handlers parte II:  addEventListener()
 //Este metodo de JS lleva dos parametros: el tipo de evento y un callback. 

//Podemos crear la funcion por fuera del listener para invocarla como su segundo parametro
//o directamente crear la funcion en el listener.

function Contador()  {
  div.innerText = num++
}

//Evento de click
anchor.addEventListener("click", Contador )
//Evento de mouse
anchor.addEventListener("mouseover", Contador )

//CRONOMETRO con setInterval()
//Este metodo de JS debe recibir como parametros: una funcion(callback) 
//y un numero que representa los milisegundos. 
//Lo que hace es ejecutar cada cierto periodo de tiempo una funcion 

let numero = 0
let div2 = document.querySelector("#number2")
let stopBtn = document.querySelector("#stopBtn")
let resetBtn = document.querySelector("#resetBtn")

//Almacenamos el setInterval en una variable para mas tarde usar ClearInterval
let interval = setInterval(() => {
    div2.innerText = numero++
    }, 1000)

//ClearInterval detiene la ejecucion del setInterval. Pero lo hacemos solo cuando
//el usuario presiona el boton de detener.

    stopBtn.addEventListener("click", () => {
        clearInterval(interval)
    })

//Este evento resetea el cronometro
    resetBtn.addEventListener("click", () => {
        numero = 0
    })


//settimeout tiene la misma estructura que setInterval. 
//la diferencia es que se ejecuta 1 sola vez, pasado el tiempo que le 
//indiquemos. Por ej en la siguiente funcion el alert se ejecuta
//en 3 segundos. 

setTimeout(()=> {
    alert("Despertador!")
},3000)