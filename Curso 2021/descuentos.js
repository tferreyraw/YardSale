const precioOriginal = 100;
// const descuento = 15;
const cupones = ["CODIGO1", "CODIGO2", "CODIGO3", "CODIGO4", "CODIGO5"];

// console.log({
  //   precioOriginal,
  //   descuento,
  //   porcentajePrecioConDescuento,
  //   precioConDescuento,
  // })

  function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = precioOriginal - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
  const precio = Number(document.getElementById("inputPrice").value);
  //const descuento = Number(document.getElementById("inputDiscount").value);
  const cupon = document.getElementById("inputCuppon").value;

  let descuento = 0;

  switch(cupon){
    case cupones[0]: //CODIGO1
      descuento = 10;
    break;  
    case cupones[1]: //CODIGO2
      descuento = 20;
    break; 
    case cupones[2]: //CODIGO3
      descuento = 30;
    break; 
    case cupones[3]: //CODIGO4
      descuento = 40;
    break; 
    case cupones[4]: //CODIGO5
      descuento = 50;
    break; 
  }


  const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
  console.log(`${precioConDescuento}  --- ${precio} ${descuento}`)
  const resultP = document.getElementById("resultP");
  resultP.innerText = `El precio con descuento es ${precioConDescuento}`


}


