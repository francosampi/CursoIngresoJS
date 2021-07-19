/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoIngresado;
	let legajoIngresado;
	let nacionalidadIngresada;

	while(
		(edadIngresada<18 || edadIngresada>90) ||
		(sexoIngresado!="F" && sexoIngresado!="M") ||
		(estadoCivilIngresado<1 || estadoCivilIngresado>4) ||
		(sueldoIngresado<8000) ||
		((legajoIngresado.length>4) || isNaN(legajoIngresado)) ||
		(nacionalidadIngresada!="A"&& nacionalidadIngresada!="E" && nacionalidadIngresada!="N")
		){
			edadIngresada=prompt("Ingrese su edad (entre 18 y 90)");
			edadIngresada=parseInt(edadIngresada);
			sexoIngresado=prompt("Ingrese su sexo (F/M)");
			estadoCivilIngresado=prompt("Ingrese su estado civil: 1-Soltero/a 2-Casado/a 3-Divorciado/a 4-Viudo/a");
			sueldoIngresado=prompt("Ingrese su sueldo (no menor a 8000)");
			sueldoIngresado=parseInt(sueldoIngresado);
			legajoIngresado=prompt("Ingrese legajo");
			nacionalidadIngresada=prompt("Ingrese nacionalidad (A/E/N)");
	}

	txtIdEdad.value = edadIngresada;
	txtIdSexo.value = sexoIngresado;
	txtIdEstadoCivil.value = estadoCivilIngresado;
	txtIdSueldo.value = sueldoIngresado;
	txtIdLegajo.value = legajoIngresado;
	txtIdNacionalidad.value = nacionalidadIngresada;
}