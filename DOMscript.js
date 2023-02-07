const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

btn.addEventListener("click", btnOnclink);

function btnOnclink() {
  const suma = Number(input1.value) + Number(input2.value);
  console.log(`La suma es ${suma}`);
  result.innerText = `El resultado es ${suma}`;
}
