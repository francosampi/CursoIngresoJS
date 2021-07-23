/*
Sampietro, Franco
Div. D

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
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
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoIngresado;
	let legajoIngresado;
	let nacionalidadIngresada;

	edadIngresada=0;
	sexoIngresado="";
	estadoCivilIngresado=0;
	sueldoIngresado=0;
	legajoIngresado="";
	nacionalidadIngresada="";

	edadIngresada = prompt("Ingrese su edad");
	edadIngresada = parseInt(edadIngresada);
	while(isNaN(edadIngresada) || edadIngresada<18 || edadIngresada>90)
	{
		edadIngresada = prompt("Error. Ingrese su edad entre 18 y 90");
		edadIngresada = parseInt(edadIngresada);
	}
	txtIdEdad.value = edadIngresada;

	sexoIngresado = prompt("Ingrese su género (M/MT/H/HT/NB/O)");
	sexoIngresado = sexoIngresado.toUpperCase();
	while(sexoIngresado!="M" && sexoIngresado!="MT" && sexoIngresado!="H" && sexoIngresado!="HT" && sexoIngresado!="NB" && sexoIngresado!="O")
	{
		sexoIngresado = prompt("Error. Ingrese su género (M/MT/H/HT/NB/O)");
		sexoIngresado = sexoIngresado.toUpperCase();
	}
	switch(sexoIngresado)
	{
		case "M":
			txtIdSexo.value = "Mujer";
		break;
		case "MT":
			txtIdSexo.value = "Mujer trans";
		break;
		case "H":
			txtIdSexo.value = "Hombre";
		break;
		case "HT":
			txtIdSexo.value = "Hombre trans";
		break;
		case "NB":
			txtIdSexo.value = "No binari@";
		break;
		case "O":
			txtIdSexo.value = "Otro";
		break;
	}

	estadoCivilIngresado = prompt("Ingrese su estado civil: 1-Soltero/a 2-Casado/a 3-Divorciado/a 4-Viudo/a");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);
	while(isNaN(estadoCivilIngresado) || estadoCivilIngresado<1 || estadoCivilIngresado>4)
	{
		estadoCivilIngresado = prompt("Error. Ingrese su estado civil: 1-Soltero/a 2-Casado/a 3-Divorciado/a 4-Viudo/a");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}
	txtIdEstadoCivil.value = estadoCivilIngresado;

	sueldoIngresado = prompt("Ingrese su sueldo bruto");
	sueldoIngresado = parseInt(sueldoIngresado);
	while(isNaN(sueldoIngresado) || sueldoIngresado<8000)
	{
		sueldoIngresado = prompt("Error. Ingrese su sueldo bruto(no menor a 8000)");
		sueldoIngresado = parseInt(sueldoIngresado);
	}
	txtIdSueldo.value = sueldoIngresado;

	legajoIngresado = prompt("Ingrese legajo");
	legajoIngresado = parseInt(legajoIngresado);
	while(isNaN(legajoIngresado) || legajoIngresado<1000 || legajoIngresado>9999)
	{
		legajoIngresado = prompt("Error. Ingrese legajo (4 caracteres)");
		legajoIngresado = parseInt(legajoIngresado);
	}
	txtIdLegajo.value = legajoIngresado;

	nacionalidadIngresada = prompt("Ingrese nacionalidad (A/E/N)");
	nacionalidadIngresada = nacionalidadIngresada.toUpperCase();
	while(nacionalidadIngresada!="A" && nacionalidadIngresada!="E" && nacionalidadIngresada!="N")
	{
		nacionalidadIngresada = prompt("Error. Ingrese nacionalidad (A/E/N)");
		nacionalidadIngresada = nacionalidadIngresada.toUpperCase();
	}
	switch(nacionalidadIngresada)
	{
		case "A":
			txtIdNacionalidad.value = "Argentin@";
		break;
		case "E":
			txtIdNacionalidad.value = "Extranjer@";
		break;
		case "N":
			txtIdNacionalidad.value = "Nacionalizad@";
		break;
	}
}

/*
while(
	(edadIngresada<18 || edadIngresada>90) ||
	(sexoIngresado!="F" && sexoIngresado!="M") ||
	(estadoCivilIngresado<1 || estadoCivilIngresado>4) ||
	(sueldoIngresado<8000) ||
	((legajoIngresado.length!=4) || isNaN(legajoIngresado)) ||
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
}*/