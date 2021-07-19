/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let i;
	let sumaPositivos;
	let productoNegativos;
	let numeroIngresado;
	let seguir;

	i=0;
	sumaPositivos=0;
	productoNegativos=1;
	numeroIngresado=0;
	seguir=true;
	
	while(seguir){
		numeroIngresado=prompt("Ingresar un número");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(numeroIngresado<0){
			productoNegativos*=numeroIngresado;
		}
		else
		{
			sumaPositivos+=numeroIngresado;
		}
		
		i++;
		seguir = confirm("Desea seguir?")
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=productoNegativos;

}//FIN DE LA FUNCIÓN