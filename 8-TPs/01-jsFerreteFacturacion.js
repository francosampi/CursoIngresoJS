/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;

    let suma;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);

    suma = precioUno+precioDos+precioTres;

    alert(suma);
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;

    let promedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);

    promedio = (precioUno+precioDos+precioTres)/3;

    alert(promedio);
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;

    let precioFinal;
    let iva;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);

    precioFinal = (precioUno+precioDos+precioTres);
    
    iva = precioFinal*0.21;

    precioFinal=precioFinal+iva;

    alert(precioFinal);
}