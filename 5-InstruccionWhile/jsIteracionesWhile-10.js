/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let sumaPositivos;
	let sumaNegativos;
	let cantidadPositivos;
	let cantidadNegativos;
	let cantidadCeros;
	let cantidadPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPositivosNegativos;
	let flagPrimero;
	let maximoIngresados;
	let minimoPositivos;
	let seguir;

	sumaPositivos=0;
	sumaNegativos=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	cantidadPares=0;
	promedioPositivos="No se pudo calcular";
	promedioNegativos="No se pudo calcular";
	diferenciaPositivosNegativos=0;
	flagPrimero=true;
	seguir=true;

	while(seguir)
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		if (numeroIngresado>0)
		{
			sumaPositivos+=numeroIngresado;
			cantidadPositivos++;

			if (!flagPrimero && numeroIngresado<minimoPositivos)
			{
				minimoPositivos = numeroIngresado;
			}
		}
		else
		{
			if (numeroIngresado<0)
			{
				sumaNegativos+=numeroIngresado;
				cantidadNegativos++;
			}
			else
			{
				cantidadCeros++;
			}
		}
		if (numeroIngresado%2==0)
		{
			cantidadPares++;
		}
		
		if (flagPrimero)
		{
			maximoIngresados = numeroIngresado;
			
			if (numeroIngresado>0)
			{
				minimoPositivos = numeroIngresado;
			}

			flagPrimero=false;
		}
		else
		{
			if (numeroIngresado>maximoIngresados)
			{
				maximoIngresados = numeroIngresado;
			}
		}
		seguir=confirm("Desea continuar?");
	}
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;

	document.write("Suma de positivos: "+sumaPositivos+"<br>");
	document.write("Suma de negativos: "+sumaNegativos+"<br>");
	document.write("Cantidad de positivos: "+cantidadPositivos+"<br>");
	document.write("Cantidad de negativos: "+cantidadNegativos+"<br>");
	document.write("Cantidad de ceros: "+cantidadCeros+"<br>");
	document.write("Cantidad de pares: "+cantidadPares+"<br>");

	if (cantidadPositivos!=0)
	{
		promedioPositivos = sumaPositivos/cantidadPositivos;
	}
	document.write("Promedio de positivos: "+promedioPositivos.toFixed(2)+"<br>");

	if (cantidadNegativos!=0)
	{
		promedioNegativos = sumaNegativos/cantidadNegativos;
	}
	document.write("Promedio de negativos: "+promedioNegativos.toFixed(2)+"<br>");

	document.write("Diferencia de positivos y negativos: "+diferenciaPositivosNegativos+"<br>");
	document.write("Máximo de los ingresados: "+maximoIngresados+"<br>");
	document.write("Mínimo de los positivos: "+minimoPositivos+"<br>");
}//FIN DE LA FUNCIÓN