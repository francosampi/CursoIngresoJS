function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	let mensaje;

	switch(destino){
		case "Bariloche":
			mensaje = "FRIO";
		break;
		case "Cataratas":
			mensaje = "CALOR";
		break;
		case "Mar del plata":
			mensaje = "CALOR";
		break;
		case "Ushuaia":
			mensaje = "FRIO";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN