//Hare una funcion normal y otra con ARROW FUNCTION

//Codigo del cuadrado
console.group(`Cuadrados`);

const perimetroCuadrado = (lado) => lado * 4;

function areaCuadrado(lado) {
  return lado ** 2;
}

console.groupEnd();

//Codigo del triangulo
console.group(`Triangulos`);

function perimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();
//Codigo del Circulo
console.group(`Circulos`);

const PI = Math.PI;

const diametroCirculo = (radio) => radio * 2;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return (diametro * PI).toFixed(2);
}

function areaCirculo(radio) {
  return (PI * radio ** 2).toFixed(2);
}
console.groupEnd();

// Desde Aqui comenzaremos a interactuar con el HTML
//Funciones de CUADRADO
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(`El perimetro del Cuadrado es ${perimetro}`);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(`El area del Cuadrado es ${area}`);
}

//Funciones de TRIANGULO
function calcularPerimetroTriangulo() {
  const ladoA = Number(document.getElementById("ladoA").value);
  const ladoB = Number(document.getElementById("ladoB").value);
  const base = Number(document.getElementById("base").value);

  const perimetro = perimetroTriangulo(ladoA, ladoB, base);
  alert(`El perimetro del Triangulo es ${perimetro}`);
}

function calcularAreaTriangulo() {
  const base = Number(document.getElementById("base").value);
  const altura = Number(document.getElementById("altura").value);

  const area = areaTriangulo(base, altura);
  alert(`El area del Triangulo es ${area}`);
}

//Funciones de TRIANGULO

function calcularPerimetroCirculo() {
  const radio = Number(document.getElementById("radio").value);

  const perimetro = perimetroCirculo(radio);
  alert(`El perimetro del Circulo es ${perimetro}`);
}

function calcularAreaCirculo() {
  const radio = Number(document.getElementById("radio").value);

  const area = areaCirculo(radio);
  alert(`El area del Circulo es ${area}`);
}

//Aqui utilice querySelector y el addEventListener para hacerlo de otra forma

document
  .querySelector("#perimetroCirculo")
  .addEventListener("click", calcularPerimetroCirculo);

document
  .querySelector("#areaCirculo")
  .addEventListener("click", calcularAreaCirculo);
