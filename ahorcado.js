var botonIniciar = document.getElementById('iniciar-juego');
var palabras = ['computadora', 'botella', 'celular', 'alcohol', 'destornillador'];

function iniciarJuego(event) {
  event.preventDefault();
  document.getElementById('iniciar-juego-div').remove();
  document.getElementById('agregar-palabra-div').remove();
  crearCanvas();
  var palabra = elegirPalabra(palabras);
  palabra = palabra.split('');
  dibujarGuiones(palabra.length, 300, 450);
}

function elegirPalabra(palabras) {
  let indice = Math.floor((Math.random() * palabras.length));
  return palabras[indice];
}

botonIniciar.addEventListener('click', iniciarJuego);
