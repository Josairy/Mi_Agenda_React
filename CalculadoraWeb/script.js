function calcular() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var operacion = document.getElementById('operacion').value;
  var resultado;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese números válidos.");
    return;
  }

  switch (operacion) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert("No se puede dividir por cero.");
        return;
      }
      resultado = num1 / num2;
      break;
  }

  var textoResultado = num1 + " " + operacion + " " + num2 + " = " + resultado;
  document.getElementById('resultado').innerText = textoResultado;

  guardarEnHistorial(textoResultado);
  mostrarHistorial();
}

function guardarEnHistorial(operacion) {
  var historial = JSON.parse(localStorage.getItem("historial")) || [];
  historial.push(operacion);
  localStorage.setItem("historial", JSON.stringify(historial));
}

function mostrarHistorial() {
  var lista = document.getElementById("listaHistorial");
  lista.innerHTML = "";

  var historial = JSON.parse(localStorage.getItem("historial")) || [];

  for (var i = 0; i < historial.length; i++) {
    var item = document.createElement("li");
    item.textContent = historial[i];
    lista.appendChild(item);
  }
}

function limpiarHistorial() {
  localStorage.removeItem("historial");
  mostrarHistorial();
}

window.onload = mostrarHistorial;

function agregar(valor) {
  const pantalla = document.getElementById("pantalla");
  pantalla.value += valor;
}

function borrarUltimo() {
  const pantalla = document.getElementById("pantalla");
  pantalla.value = pantalla.value.slice(0, -1);
}

function limpiarPantalla() {
  document.getElementById("pantalla").value = "";
}

function calcularExpresion() {
  const pantalla = document.getElementById("pantalla");
  try {
    const resultado = eval(pantalla.value);
    document.getElementById("resultado").innerText = pantalla.value + " = " + resultado;
    guardarEnHistorial(pantalla.value + " = " + resultado);
    mostrarHistorial();
    pantalla.value = resultado;
  } catch (e) {
    alert("Expresión inválida");
  }
}