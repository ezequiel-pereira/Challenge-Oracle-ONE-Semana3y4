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

function dibujarGuiones(letras, x, y) {
  for (let index = 0; index < letras; index++) {
    ctx.moveTo(x, y);
    ctx.lineTo(x + 30, y);
    x += 35;
    ctx.stroke();
  }
}
