var tablero;
var ctx;

function crearCanvas() {
  let canvas = document.createElement('canvas');
  canvas.setAttribute('width', '1200px');
  canvas.setAttribute('height', '800px');
  document.getElementById('canvas-div').appendChild(canvas);
  tablero = document.querySelector('canvas');
  ctx = tablero.getContext('2d');
}

function dibujarGuiones(length, x, y) {
  let guiones = Array(length);
  guiones.fill('_');
  dibujarLetras(guiones, x, y);
}

function dibujarLetras(letras, x, y) {
  ctx.fillStyle = 'white';
  ctx.fillRect(x, (y-50), 600, 60);
  ctx.fillStyle = 'black';
  ctx.font = '48px serif';
  ctx.fillText(letras.join(' '), x, y);
}
