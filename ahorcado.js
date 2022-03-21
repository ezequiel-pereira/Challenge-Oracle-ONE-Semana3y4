var botonIniciar = document.getElementById("iniciar-juego");
var palabras = [
  "COMPUTADORA",
  "BOTELLA",
  "CELULAR",
  "ALCOHOL",
  "DESTORNILLADOR",
];
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
  dibujarLetras(letrasCorrectas, 800, 500, true);
  dibujarHorca();
  document.onkeypress = juego;
}

botonIniciar.addEventListener("click", iniciarJuego);

function juego(event) {
  let letra = event.key;

  if (errores < 6) {
    console.log("Errores: " + errores);
  } else {
    console.log("Errores: " + errores);
    return false;
  }

  if (validarLetraIngresada(letra)) {
    console.log("Letra válida");
  } else {
    return false;
  }

  if (letraCorrecta(letra)) {
    dibujarLetras(letrasCorrectas, 600, 450, true);
  } else {
    letrasIncorrectas.push(letra);
    dibujarLetras(letrasIncorrectas, 800, 200, false);
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
    console.log(letra + " es una letra mayúscula");
    return true;
  } else {
    console.log(letra + " no es una letra mayúscula");
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
