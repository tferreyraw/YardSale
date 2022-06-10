//Codigo del cuadrado
console.group(`Cuadrados`);
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)

const perimetroCuadrado = ladoCuadrado*4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`)

const areaCuadrado = ladoCuadrado**2;
console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`)

console.groupEnd();

//Codigo del triangulo
console.group(`Triangulos`)

const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del Triangulo miden: ${ladoTriangulo}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`)

console.log(`La altura del Triangulo es: ${alturaTriangulo}cm`)

const perimetroTriangulo = ladoTriangulo+ladoTriangulo2+baseTriangulo;
console.log(`El perimetro del Triangulo es: ${perimetroTriangulo}cm`)

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log(`El area del Triangulo es: ${areaTriangulo}cm^3`)

console.groupEnd();

//Codigo del Circulo

console.group(`Circulos`)

const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const PI = Math.PI;

console.log(`El radio del Circulo es: ${radioCirculo}cm`)

const perimetroCirculo = diametroCirculo*PI;
console.log(`El perimetro del Circulo es: ${perimetroCirculo.toFixed(2)}cm`)

const areaCirculo = PI*(radioCirculo**2);
console.log(`El area del Circulo es: ${areaCirculo.toFixed(2)}cm^3`)

console.groupEnd();