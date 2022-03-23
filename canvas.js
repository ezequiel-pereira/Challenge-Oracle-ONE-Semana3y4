var tablero;
var ctx;

function crearCanvas() {
  let canvas = document.createElement("canvas");
  canvas.setAttribute("width", "1200px");
  canvas.setAttribute("height", "800px");
  document.getElementById("canvas-div").appendChild(canvas);
  tablero = document.querySelector("canvas");
  ctx = tablero.getContext("2d");
  ctx.lineWidth = 4;
}

function dibujarLetras(letras, x, y, correcta) {
  ctx.fillStyle = "white";
  ctx.fillRect(x, y - 50, 600, 60);

  if (correcta) {
    ctx.fillStyle = "black";
  } else {
    ctx.fillStyle = "red";
  }

  ctx.font = "48px serif";
  ctx.fillText(letras.join(" "), x, y);
}

function dibujarHorca() {
  ctx.beginPath();
  ctx.moveTo(150, 500);
  ctx.lineTo(50, 550);
  ctx.lineTo(250, 550);
  ctx.lineTo(150, 500);
  ctx.lineTo(150, 50);
  ctx.lineTo(500, 50);
  ctx.lineTo(500, 100);
  ctx.stroke();
}

function dibujarAhorcado(errores) {
  switch (errores) {
    case 1:
      dibujarCabeza();
      break;

    case 2:
      dibujarTronco();
      break;

    case 3:
      dibujarPiernaIzquierda();
      break;

    case 4:
      dibujarPiernaDerecha();
      break;

    case 5:
      dubujarBrazoIzquierdo();
      break;

    case 6:
      dibujarBrazoDerecho();
      break;

    default:
      break;
  }
}

function dibujarCabeza() {
  ctx.moveTo(540, 140);
  ctx.arc(500, 140, 40, 0, Math.PI * 2, true);
  ctx.stroke();
}

function dibujarTronco() {
  ctx.moveTo(500, 180);
  ctx.lineTo(500, 350);
  ctx.stroke();
}

function dibujarPiernaIzquierda() {
  ctx.moveTo(500, 350);
  ctx.lineTo(420, 450);
  ctx.stroke();
}

function dibujarPiernaDerecha() {
  ctx.moveTo(500, 350);
  ctx.lineTo(580, 450);
  ctx.stroke();
}

function dubujarBrazoIzquierdo() {
  ctx.moveTo(500, 250);
  ctx.lineTo(420, 150);
  ctx.stroke();
}

function dibujarBrazoDerecho() {
  ctx.moveTo(500, 250);
  ctx.lineTo(580, 150);
  ctx.stroke();
}

function dibujarFinDelJuego(x, y, ganador) {
  ctx.font = "48px serif";

  if (ganador) {
    ctx.fillStyle = "green";
    ctx.fillText("¡Ganaste, Felicidades!", x, y);
  } else {
    ctx.fillStyle = "red";
    ctx.fillText("¡Fin del juego!", x, y);
  }
}
