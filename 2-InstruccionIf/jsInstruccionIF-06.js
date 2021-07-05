function mostrar()
{
	if (document.getElementById("txtIdEdad").value>=18)
		alert("Es mayor de edad");
	else if (document.getElementById("txtIdEdad").value>=13 &&
	document.getElementById("txtIdEdad").value<=17)
		alert("Es adolescente");
	else if (document.getElementById("txtIdEdad").value<13)
		alert("Es un niño");

}//FIN DE LA FUNCIÓN