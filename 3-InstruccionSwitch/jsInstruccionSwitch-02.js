function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Marzo":
		case "Abril":
		case "Junio":
			alert("Falta para el invierno");
		break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío");
		break;
		default:
			alert("Ya pasamos el frío, ahora calor!!!");
	}
}//FIN DE LA FUNCIÓN