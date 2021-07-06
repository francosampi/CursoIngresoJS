/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseFloat(importe);

	resultado = importe-importe*0.25;
	resultado = resultado.toFixed(2);

	document.getElementById("txtIdResultado").value = resultado;
}