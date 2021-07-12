/*
Sampietro, Franco

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
*/
function mostrarAumento()
{
	let importeSueldo;
	let resultado;

	importeSueldo = document.getElementById("txtIdSueldo").value;
	importeSueldo = parseFloat(importeSueldo);

	resultado = importeSueldo*1.1;
	resultado = resultado.toFixed(2);

	document.getElementById("txtIdResultado").value = resultado;
}