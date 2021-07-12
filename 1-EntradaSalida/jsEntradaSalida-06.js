/*
Sampietro, Franco

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultadoSuma;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);

	resultadoSuma = numeroUno + numeroDos;

	alert("La suma es "+resultadoSuma);
}