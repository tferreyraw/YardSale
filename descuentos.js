const precioOriginal = 100;
const descuento = 15;


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