var botonIniciar = document.getElementById('iniciar-juego');
var palabras = ['computadora', 'botella', 'celular', 'alcohol', 'destornillador'];

function iniciarJuego(event) {
  event.preventDefault();
  document.getElementById('iniciar-juego-div').remove();
  document.getElementById('agregar-palabra-div').remove();
  elegirPalabra(palabras);
  crearCanvas();
}

function elegirPalabra(palabras) {
  let indice = Math.floor((Math.random() * palabras.length));
  return palabras[indice];
}

function crearCanvas() {
  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', '1200px');
  canvas.setAttribute('height', '800px');
  document.getElementById('canvas-div').appendChild(canvas);
}

botonIniciar.addEventListener('click', iniciarJuego);