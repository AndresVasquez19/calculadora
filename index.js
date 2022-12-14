/*ingresar valores y que se muestren por parte del usuario*/
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
/* se define las variables para poder selecionar los numeros*/
const botonesNumeros = document.querySelectorAll('.numero');
/* se define las variables para poder selecionar los operadores*/
const botonesOperadores = document.querySelectorAll('.operador');

/*variable con parametros  */
const display = new Display(displayValorAnterior, displayValorActual);

/*parametros */
botonesNumeros.forEach(boton => { /*para ejecutar un callback en este caso el boton*/
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));  /*  activa un evento, en este caso en javascript*/
});

/* botones de operadores  */
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});