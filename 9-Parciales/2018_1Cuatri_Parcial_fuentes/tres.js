/*
P18-3

Sampietro, Franco
DIV. D
*/
function mostrar()
{
    let precio;
    let porcentajeDescuento;
    let precioFinal;

    precio = prompt("Ingrese precio: ");
    precio = parseInt(precio);

    porcentajeDescuento = prompt("Ingrese porcentaje de descuento");
    porcentajeDescuento = parseInt(porcentajeDescuento);

    precioFinal = precio-(precio*(porcentajeDescuento/100));

    document.getElementById("elPrecioFinal").value = precioFinal;
}