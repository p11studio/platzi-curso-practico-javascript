//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscuount = document.getElementById("InputDiscount");
    const discountValue = inputDiscuount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resulP = document.getElementById("ResultPrice");
    resulP.innerText = "El precio con descuento son: $" + precioConDescuento;


}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })