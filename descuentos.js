const precioOriginal = 100;

const cupones = ["CODIGO1", "CODIGO2", "CODIGO3", "CODIGO4", "CODIGO5"];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = precioOriginal - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const precio = Number(document.getElementById("inputPrice").value);
  //AGREGANDO OPCION DE CUPONES ↓↓↓
  const cupon = document.getElementById("inputCuppon").value;

  let cuponDescuento = 0;

  switch (cupon) {
    case cupones[0]: //CODIGO1
      cuponDescuento = 10;
      break;
    case cupones[1]: //CODIGO2
      cuponDescuento = 20;
      break;
    case cupones[2]: //CODIGO3
      cuponDescuento = 30;
      break;
    case cupones[3]: //CODIGO4
      cuponDescuento = 40;
      break;
    case cupones[4]: //CODIGO5
      cuponDescuento = 50;
      break;
    default:
      alert(
        `El cupon escrito no es valido, por favor coloca un cupon que sea valido`
      );
      break;
  }

  const descuento =
    Number(document.getElementById("inputDiscount").value) + cuponDescuento;

  const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

  const resultP = document.getElementById("resultP");
  resultP.innerText = `El precio con descuento es ${precioConDescuento}`;
}
