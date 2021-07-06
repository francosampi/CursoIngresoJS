function mostrar()
{
	switch(document.getElementById("txtIdMes").value){
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
		break;
		default:
			alert("Este més tiene 30 días o mas");
		break;
	}
}//FIN DE LA FUNCIÓN