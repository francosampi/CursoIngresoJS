function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	let mensaje;

	switch(destino){
		case "Bariloche":
			mensaje = "Sur";
		break;
		case "Cataratas":
			mensaje = "Oeste";
		break;
		case "Mar del plata":
			mensaje = "Este";
		break;
		case "Ushuaia":
			mensaje = "Sur";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN