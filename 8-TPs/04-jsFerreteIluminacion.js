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
    let descuentoLampara;
    let impuestoIIBBPorcentaje;
    let impuestoIIBB;

    precioLampara = 35;
    impuestoIIBBPorcentaje = 0.1;
    descuentoLampara = 0;
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaLampara = document.getElementById("Marca").value;

    
    if (cantidadLamparas>5)
    {
        descuentoLampara = 0.5;
    }
    else
    {
        switch(cantidadLamparas)
        {
            case 5:
                switch(marcaLampara)
                {
                    case "ArgentinaLuz":
                        descuentoLampara = 0.25;
                    break;
                    default:
                        descuentoLampara = 0.3;
                }
            break;
    
            case 4:
                switch(marcaLampara)
                {
                    case "ArgentinaLuz":
                        descuentoLampara = 0.25;
                    break;
                    case "FelipeLamparas":
                        descuentoLampara = 0.25;
                    break;
                    default:
                        descuentoLampara = 0.2;
                }
            break;
    
            case 3:
                switch(marcaLampara)
                {
                    case "ArgentinaLuz":
                        descuentoLampara = 0.15;
                    break;
                    case "FelipeLamparas":
                        descuentoLampara = 0.1;
                    break;
                    default:
                        descuentoLampara = 0.05;
                }
            break;
        }
    }

    /*
    --SWITCH E IF--

    if (cantidadLamparas>5)
    {
        descuentoLampara = 0.5;
    }
    else
    {
        switch(cantidadLamparas)
        {
            case 5:
                if (marcaLampara=="ArgentinaLuz")
                {
                    descuentoLampara = 0.4;
                }
                else
                {
                    descuentoLampara = 0.3;
                }
            break;
    
            case 4:
                if (marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas")
                {
                    descuentoLampara = 0.25;
                }
                else
                {
                    descuentoLampara = 0.2;
                }
            break;
    
            case 3:
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
            break;
        }
    }
    */

    /*
    --SOLO CON IF--

    if (cantidadLamparas>5)
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
                descuentoLampara = 0.3;
            }
        }
        else
        {
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
                if (cantidadLamparas==3)
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
        }
    }*/

    precioConDescuento = (cantidadLamparas*precioLampara)*(1-descuentoLampara);

    if (precioConDescuento>120)
    {
        impuestoIIBB = precioConDescuento*impuestoIIBBPorcentaje;
        alert("IIBB Usted pagó "+impuestoIIBB.toFixed(2)+"$");
        precioConDescuento = precioConDescuento+impuestoIIBB;
    }
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2)+"$";
}