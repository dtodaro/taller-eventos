// Obtener el elemento del div por su id
const divElement = document.getElementById("miDiv");

// Agregar el manejador de eventos para el click en el div
divElement.addEventListener("click", function() {
  // Mostrar la alerta al dar click en el div
  alert("Hola! Soy el div");
});