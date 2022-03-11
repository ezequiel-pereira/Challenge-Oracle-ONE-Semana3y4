var botonIniciar = document.getElementById('iniciar-juego');

function iniciarJuego(event) {
  event.preventDefault();
  document.getElementById('iniciar-juego-div').remove();
  document.getElementById('agregar-palabra-div').remove();
  crearCanvas();
}

function crearCanvas() {
  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', '1200px');
  canvas.setAttribute('height', '800px');
  document.getElementById('canvas-div').appendChild(canvas);
  console.log('canvas crear');
}

botonIniciar.addEventListener('click', iniciarJuego);