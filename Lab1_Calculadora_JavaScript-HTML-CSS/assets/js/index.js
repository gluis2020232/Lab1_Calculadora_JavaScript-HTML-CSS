const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');

const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

/* --Compracion--
const calculadora = new Calculadora();
console.log(calculadora.sumar(2,3))
console.log(calculadora.restar(2,3))
console.log(calculadora.multiplicar(2,3))
console.log(calculadora.dividir(2,3))
*/

//Instancia del display y le pasamos los siguientes parametros
const display = new Display(displayValorAnterior, displayValorActual);

//Empasamos a hacer la intraccion
//Y vamos a agregar un EventListener a cada uno
// Lo que vamos hacer es que el Display agrege un numero
botonesNumeros.forEach(boton => {
    //cada vez que se precione un boton, hacemos que el display agrege un numero
        //El numero que le corresponde el boton
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
    });

botonesOperadores.forEach(boton => {
        boton.addEventListener('click', () => display.computar(boton.value))
});



















