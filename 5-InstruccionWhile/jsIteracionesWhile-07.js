/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i;
	let acumulador;
	let numeroIngresado;
	let seguir;
	let promedio;

	i=0;
	acumulador=0;
	numeroIngresado=0;
	seguir = true;
	
	while(seguir){
		numeroIngresado=prompt("Ingresar un número");
		numeroIngresado=parseInt(numeroIngresado);
		
		acumulador+=numeroIngresado;
		i++;
		
		seguir = confirm("Desea seguir?")
	}
	promedio = acumulador/5;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;

}//FIN DE LA FUNCIÓN