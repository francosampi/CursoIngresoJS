/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var cantidadEntradas;

	contador=0;
	acumulador=0;
	numeroIngresado=0;

	cantidadEntradas = prompt("¿Cuántos numeros desea ingresar?");
	
	while(numeroIngresado<cantidadEntradas){
		numeroIngresado=prompt("Ingresar un número");
		numeroIngresado=parseInt(numeroIngresado);
		
		acumulador+=numeroIngresado;

		txtIdSuma.value=acumulador;
		txtIdPromedio.value=acumulador/5;

		contador++;
	}

}//FIN DE LA FUNCIÓN