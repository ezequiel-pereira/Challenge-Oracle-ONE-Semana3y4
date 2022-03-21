var botonIniciar = document.getElementById('iniciar-juego');
var palabras = ['COMPUTADORA', 'BOTELLA', 'CELULAR', 'ALCOHOL', 'DESTORNILLADOR'];
var palabra = '';
var letrasCorrectas= [];

function iniciarJuego(event) {
  event.preventDefault();
  document.getElementById('iniciar-juego-div').remove();
  document.getElementById('agregar-palabra-div').remove();
  crearCanvas();
  palabra = elegirPalabra(palabras);
  palabra = palabra.split('');
  letrasCorrectas = Array(palabra.length).fill('_');
  dibujarLetras(letrasCorrectas, 300, 450);
  document.onkeypress = validarLetraIngresada;
}

botonIniciar.addEventListener('click', iniciarJuego);

function elegirPalabra(palabras) {
  let indice = Math.floor((Math.random() * palabras.length));
  return palabras[indice];
}

function validarLetraIngresada(event) {
  let letra = event;
  let esUnaLetraMayuscula  = new RegExp('[A-Z]');
  if (letra.length === 1 && esUnaLetraMayuscula.test(letra)) {
    console.log(letra + ' es una letra mayúscula');
    return true;
  } else {
    console.log(letra + ' no es una letra mayúscula');
    return false;
  }
}
