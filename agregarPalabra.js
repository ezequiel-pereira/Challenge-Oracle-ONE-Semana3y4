var agregarPalabra = document.getElementById("nueva-palabra");
var inputAgregarPalabra = document.getElementById("input-nueva-palabra");
var nuevaPalabra = "";

agregarPalabra.addEventListener("click", (event) => {
  event.preventDefault();
  palabra = inputAgregarPalabra.value;

  if (!palabras.includes(nuevaPalabra)) {
    console.log("includes: " + !palabras.includes(nuevaPalabra));
    palabras.push(nuevaPalabra);
  } else {
    console.log("Palabra repetida");
  }
  inputAgregarPalabra.value = "";
});
