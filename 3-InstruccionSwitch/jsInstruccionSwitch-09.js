function mostrar()
{
	let precio;
	let precioPorcentaje;
	let precioFinal;
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

	precio = 15000;

	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					precioPorcentaje = 1.2;
				break;
				case "Mar del plata":
					precioPorcentaje = 0.8;
				break;
				default:
					precioPorcentaje = 0.9;
			}
		break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					precioPorcentaje = 0.8;
				break;
				case "Mar del plata":
					precioPorcentaje = 1.2;
				break;
				default:
					precioPorcentaje = 1.1;
			}
		break;
		default:
			switch(destino){
				case "Cordoba":
					precioPorcentaje = 1;
				break;
				default:
					precioPorcentaje = 1.1;
			}
	}
	precioFinal = precio*precioPorcentaje;
	alert("Precio final: "+precioFinal+"$");

}//FIN DE LA FUNCIÓN