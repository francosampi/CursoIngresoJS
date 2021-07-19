/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i;
	let acumulador;
	let numeroIngresado;
	let promedio;

	i=0;
	acumulador=0;
	
	while(i<5){
		numeroIngresado=prompt("Ingresar un número");
		numeroIngresado=parseInt(numeroIngresado);
		
		acumulador+=numeroIngresado;

		i++;
	}
	promedio = acumulador/5;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
}//FIN DE LA FUNCIÓN