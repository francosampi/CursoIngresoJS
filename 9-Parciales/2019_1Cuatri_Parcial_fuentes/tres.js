function mostrar()
{
    let precio;
    let porcentajeDescuento;
    let precioFinal;

    precio = prompt("Ingrese precio: ");
    precio = parseInt(precio);

    porcentajeDescuento = prompt("Ingrese porcentaje de descuento");
    porcentajeDescuento = parseInt(porcentajeDescuento);
    porcentajeDescuento = porcentajeDescuento/100;

    precioFinal = precio-(precio*porcentajeDescuento);

    document.getElementById("elPrecioFinal").value = precioFinal;
}