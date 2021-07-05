function mostrar()
{
	let nota = Math.round(Math.random()*10);

	alert("Nota: "+nota);

	if (nota==9 || nota==10)
		alert("EXCELENTE");
	else if (nota>=4)
		alert("APROBÓ");
	else if (nota<4)
		alert("Vamos, la próxima se puede");

}//FIN DE LA FUNCIÓN
