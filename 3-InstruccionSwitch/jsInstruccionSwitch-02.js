function mostrar()
{
	switch(document.getElementById("txtIdMes").value){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Junio":
			alert("Falta para el invierno");
		break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío");
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frío, ahora calor!!!");
		break;
	}
}//FIN DE LA FUNCIÓN