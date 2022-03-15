var botonIniciar = document.getElementById('iniciar-juego');
var palabras = ['COMPUTADDORA', 'BOTELLA', 'CELULAR', 'ALCOHOL', 'DESTORNILLADOR'];

function iniciarJuego(event) {
  event.preventDefault();
  document.getElementById('iniciar-juego-div').remove();
  document.getElementById('agregar-palabra-div').remove();
  crearCanvas();
  var palabra = elegirPalabra(palabras);
  palabra = palabra.split('');
  dibujarGuiones(palabra.length, 300, 450);
  document.onkeydown = validarLetra;
}

botonIniciar.addEventListener('click', iniciarJuego);

function elegirPalabra(palabras) {
  let indice = Math.floor((Math.random() * palabras.length));
  return palabras[indice];
}

function validarLetraIngresada(event) {
  let letra = event.key;
  let esUnaLetraMayuscula  = new RegExp('[A-Z]');
  if (letra.length === 1 && esUnaLetraMayuscula.test(letra)) {
    console.log(letra + ' es una letra mayúscula');
  } else {
    console.log(letra + ' no es una letra mayúscula');
  }
}

