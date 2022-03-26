var botonIniciar = document.getElementById("iniciar-juego");
var palabra = "";
var errores = 0;
var letrasCorrectas = [];
var letrasIncorrectas = [];

function iniciarJuego(event) {
  event.preventDefault();
  document.getElementById("iniciar-juego-div").remove();
  document.getElementById("agregar-palabra-div").remove();
  crearCanvas();
  palabra = elegirPalabra(palabras);
  palabra = palabra.split("");
  letrasCorrectas = Array(palabra.length).fill("_");
  dibujarLetras(letrasCorrectas, 700, 500, true);
  dibujarHorca();
  document.onkeypress = juego;
}

botonIniciar.addEventListener("click", iniciarJuego);

function juego(event) {
  let letra = event.key;

  if (errores < 5) {
    console.log("Errores: " + errores);
  } else {
    dibujarFinDelJuego(700, 100, false);
    setTimeout(recargar, 3000);
  }

  if (validarLetraIngresada(letra)) {
    console.log("Letra válida");
  } else {
    return false;
  }

  if (letraCorrecta(letra)) {
    dibujarLetras(letrasCorrectas, 700, 500, true);
    verificarGanador();
  } else if (!letrasIncorrectas.includes(letra)) {
    letrasIncorrectas.push(letra);
    dibujarLetras(letrasIncorrectas, 700, 200, false);
    errores++;
    dibujarAhorcado(errores);
  }
}

function elegirPalabra(palabras) {
  let indice = Math.floor(Math.random() * palabras.length);
  return palabras[indice];
}

function validarLetraIngresada(event) {
  let letra = event;
  let esUnaLetraMayuscula = new RegExp("[A-Z]");
  if (letra.length === 1 && esUnaLetraMayuscula.test(letra)) {
    return true;
  } else {
    return false;
  }
}

function letraCorrecta(letra) {
  let aciertos = 0;
  palabra.forEach((element, index) => {
    if (element === letra) {
      letrasCorrectas[index] = element;
      aciertos++;
    }
  });
  if (aciertos >= 1) {
    return true;
  }
}

function verificarGanador() {
  if (palabra.toString() === letrasCorrectas.toString()) {
    dibujarFinDelJuego(700, 100, true);
    setTimeout(recargar, 3000);
  }
}

function recargar() {
  location.reload();
}
