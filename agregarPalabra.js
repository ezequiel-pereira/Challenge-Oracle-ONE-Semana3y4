var agregarPalabra = document.getElementById("nueva-palabra");
var inputAgregarPalabra = document.getElementById("input-nueva-palabra");
var nuevaPalabra = "";

agregarPalabra.addEventListener("click", (event) => {
  event.preventDefault();
  nuevaPalabra = inputAgregarPalabra.value;

  if (!palabras.includes(nuevaPalabra)) {
    palabras.push(nuevaPalabra.toUpperCase());
    guardarPalabras(palabras);
  } else {
    console.log("Palabra repetida");
  }
  inputAgregarPalabra.value = "";
});
