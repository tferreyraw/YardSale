// //CALCULANDO LA MEDIA ARITMETICA

const lista1 = [100, 200, 300, 500];

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// //CALCULANDO LA MEDIANA

const lista2 = [100, 200, 500, 400000000];

const mitadLista2 = parseInt(lista2.length / 2);

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista2.length)) {
  const elemento1 = lista2[mitadLista2];
  const elemento2 = lista2[mitadLista2 - 1];
  mediana = (elemento1 + elemento2) / 2;
} else {
  mediana = lista2[mitadLista2];
}

console.log(mitadLista2);
console.log(mediana);

//CALCULANDO LA MODA
const lista3 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
const lista3Count = {};

lista3.map(function (elemento) {
  if (lista3Count[elemento]) {
    lista3Count[elemento] += 1;
  } else {
    lista3Count[elemento] = 1;
  }
});

const lista3Array = Object.entries(lista3Count).sort(function (
  valorAcumulado,
  nuevoValor
) {
  return valorAcumulado[1] - nuevoValor[1];
});

const moda = lista3Array[lista3Array.length - 1];

//GENERANDO UNA FUNCION PARA CALCULAR LA MODA
function calcularModa(arr) {
  const arrCount = {};

  arr.map(function (elemento) {
    if (arrCount[elemento]) {
      arrCount[elemento] += 1;
    } else {
      arrCount[elemento] = 1;
    }
  });

  const arrArray = Object.entries(arrCount).sort(function (
    valorAcumulado,
    nuevoValor
  ) {
    return valorAcumulado[1] - nuevoValor[1];
  });

  const moda = arrArray[arrArray.length - 1];
  return moda;
}
