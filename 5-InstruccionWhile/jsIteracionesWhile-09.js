/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numeroIngresado;
	let maximo;
	let minimo;
	let flagPrimero;
	let seguir;

	flagPrimero=true;
	seguir=true;

	while(seguir)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if (flagPrimero){
			maximo=numeroIngresado;
			minimo=numeroIngresado;
			flagPrimero=false;
		}
		else
		{
			if(numeroIngresado>maximo){
				maximo = numeroIngresado;
			}
			else
			{
				if (numeroIngresado<minimo){
					minimo = numeroIngresado;
				}
			}
		}
		seguir=confirm("Desea continuar?");
	}
	txtIdMaximo.value=maximo;
	txtIdMinimo.value=minimo;
}//FIN DE LA FUNCIÓN