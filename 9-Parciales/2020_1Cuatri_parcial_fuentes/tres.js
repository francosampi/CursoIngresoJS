function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let seguir;
	//A)
	let temperaturaCorporalMax;
	let nombreMasTemperatura;
	//B)
	let mayoresEdadViudos;
	//C)
	let hombresSolterosYViudos;
	//D)
	let terceraEdadTemperaturaAlta;
	//E)
	let hombresSolterosEdad;
	let cantidadHombresSolterosEdad;
	let promedioHombresSolterosEdad;

	mayoresEdadViudos = 0;
	hombresSolterosYViudos = 0;
	terceraEdadTemperaturaAlta=0;
	temperaturaCorporalMax = 0;
	cantidadHombresSolterosEdad = 0;
	promedioHombresSolterosEdad = 0;
	seguir = true;

	while(seguir)
	{
		nombre = prompt("Ingrese su nombre");

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		while(sexo!="f" && sexo!="m")
		{
			sexo = prompt("Ingrese su sexo");
			sexo = sexo.toLowerCase();
		}
		
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil = prompt("Ingrese estado civil");
			estadoCivil = estadoCivil.toLowerCase();
		}

		switch(estadoCivil)
		{
			case "viudo":
				if(sexo=="m")
				{
					hombresSolterosYViudos++;
				}
				if (edad>17)
				{
					mayoresEdadViudos++;
				}
			break;
			case "soltero":
				if (sexo=="m")
				{
					cantidadHombresSolterosEdad++;
					hombresSolterosEdad += edad;
					hombresSolterosYViudos++;
				}
			break;
		}

		temperaturaCorporal = prompt("Ingrese temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);

		if (edad>60 && temperaturaCorporal>38)
		{
			terceraEdadTemperaturaAlta++;
		}

		if (temperaturaCorporal>temperaturaCorporalMax)
		{
			temperaturaCorporalMax = temperaturaCorporal;
			nombreMasTemperatura = nombre;
		}

		//datos para volver a ingresar
		sexo = "";
		estadoCivil="";
		
		seguir = confirm("Desea continuar ingresando?");
	}
	promedioHombresSolterosEdad = hombresSolterosEdad/cantidadHombresSolterosEdad;

	//A)
	alert("Nombre de persona con más temperatura: "+nombreMasTemperatura);
	//B)
	alert("Adultos mayores de edad viudos: "+mayoresEdadViudos);
	//C)
	alert("Hay "+hombresSolterosYViudos+" hombres solteros o viudos.");
	//D)
	alert("Personas de la tercera edad con temperatura mayor a 38: "+terceraEdadTemperaturaAlta);
	//E)
	alert("Promedio de edad entre los hombres solteros: "+promedioHombresSolterosEdad);
}