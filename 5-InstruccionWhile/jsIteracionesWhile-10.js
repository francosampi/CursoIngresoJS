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

	seguir=true;

	sumaPositivos=0;
	sumaNegativos=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	cantidadPares=0;
	promedioPositivos=0;
	promedioNegativos=0;
	diferenciaPositivosNegativos=0;

	while(seguir)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if (numeroIngresado>0){
			sumaPositivos+=numeroIngresado;
			cantidadPositivos++;
		}
		else
		{
			if (numeroIngresado<0){
				sumaNegativos+=numeroIngresado;
				cantidadNegativos++;
			}
			else
			{
				if (numeroIngresado==0){
					cantidadCeros++;
				}
			}
		}
		if (numeroIngresado%2==0){
			cantidadPares++;
		}
		seguir=confirm("Desea continuar?");
	}
	promedioPositivos = sumaPositivos/cantidadPositivos;
	promedioNegativos = sumaNegativos/cantidadNegativos;
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;

	document.write("Suma de positivos:"+sumaPositivos+"<br>");
	document.write("Suma de negativos:"+sumaNegativos+"<br>");
	document.write("Cantidad de positivos:"+cantidadPositivos+"<br>");
	document.write("Cantidad de negativos:"+cantidadNegativos+"<br>");
	document.write("Cantidad de ceros:"+cantidadCeros+"<br>");
	document.write("Cantidad de pares:"+cantidadPares+"<br>");
	document.write("Promedio de positivos:"+promedioPositivos+"<br>");
	document.write("Promedio de negativos:"+promedioNegativos+"<br>");
	document.write("Diferencia de positivos y negativos:"+diferenciaPositivosNegativos+"<br>");

}//FIN DE LA FUNCIÓN