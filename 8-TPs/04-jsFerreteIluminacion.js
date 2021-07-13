/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let precioLampara;
 	let cantidadLamparas;
    let marcaLampara;
    let precioConDescuento;

    let impuestoIIBBPorcentaje=0.1;
    let impuestoIIBB;

    let descuentoLampara;

    precioLampara = 35;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marcaLampara = document.getElementById("Marca").value;

    impuestoIngresosBrutos = 0.1;

    if (cantidadLamparas>=6)
    {
        descuentoLampara = 0.5;
    }
    else
    {
        if (cantidadLamparas==5)
        {
            if (marcaLampara=="ArgentinaLuz")
            {
                descuentoLampara = 0.4;
            }
            else
            {
                descuentoLampara = 0.4;
            }
        }
        if (cantidadLamparas==4)
        {
            if (marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas")
            {
                descuentoLampara = 0.25;
            }
            else
            {
                descuentoLampara = 0.2;
            }
        }
        else
        {
            if (marcaLampara=="ArgentinaLuz")
            {
                descuentoLampara = 0.15;
            }
            else
            {
                if (marcaLampara=="FelipeLamparas")
                {
                    descuentoLampara = 0.1;
                }
                else
                {
                    descuentoLampara = 0.05;
                }
            }
        }
    }
    precioConDescuento=(cantidadLamparas*precioLampara);
    precioConDescuento=precioConDescuento*descuentoLampara;

    if (precioConDescuento>120)
    {
        impuestoIIBB=precioConDescuento*impuestoIIBBPorcentaje;

        precioConDescuento=precioConDescuento+impuestoIIBB;

        alert("IIBB Usted pagó "+impuestoIIBB);
    }

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
}