var miTemporizador ;
var contador=0;

function inicio()
{
	document.getElementById("secreto").style.visibility="hidden";
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	document.getElementById("secreto").style.visibility="visible";
   
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	clearTimeout(miIntervalo);

}//FIN DE LA FUNCIÓN fin