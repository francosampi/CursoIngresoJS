
function mostrar()
{
	let productoTipo;
	let productoPrecio;
	let productoUnidades;
	let productoMarca;
	let productoFabricante;
	let contadorIngresos;
	//A)
	let alcoholMasBaratoPrecio;
	let alcoholMasBaratoUnidades;
	let alcoholMasBaratoFabricante;
	//B)
	let productoMasUnidades;
	//C)
	let cantidadUnidadesBarbijo;
	let cantidadUnidadesJabon;
	let cantidadUnidadesAlcohol;
	//PRECIO POR COMPRA?

	productoTipo = "";
	productoPrecio = 0;
	productoUnidades = 0;
	productoMarca = "";
	productoFabricante = "";
	contadorIngresos = 0;

	alcoholMasBaratoPrecio = 0;
	productoMasUnidades = 0;

	cantidadUnidadesBarbijo = 0;
	cantidadUnidadesJabon = 0;
	cantidadUnidadesAlcohol = 0;

	while(contadorIngresos<2)
	{
		while(productoTipo!="barbijo" && productoTipo!="jabon" && productoTipo!="alcohol")
		{
			productoTipo = prompt("Ingrese el tipo de producto (barbijo/jabon/alcohol) ["+(contadorIngresos+1)+"/5]");
		}

		while(productoPrecio<100 || productoPrecio>300)
		{
			productoPrecio = prompt("Ingrese el precio del producto (entre 100 y 300) ["+(contadorIngresos+1)+"/5]");
			productoPrecio = parseInt(productoPrecio);
		}

	 	productoUnidades = prompt("Ingrese las unidades del producto ["+(contadorIngresos+1)+"/5]");
		productoUnidades = parseInt(productoUnidades);

		switch(productoTipo)
		{
			case "barbijo":
				cantidadUnidadesBarbijo+=productoUnidades;
			break;
			case "jabon":
				cantidadUnidadesJabon+=productoUnidades;
			break;
			case "alcohol":
				cantidadUnidadesAlcohol+=productoUnidades;
			break;
		}

	 	productoMarca = prompt("Ingrese la marca del producto ["+(contadorIngresos+1)+"/5]");
		productoFabricante = prompt("Ingrese el fabricante del producto ["+(contadorIngresos+1)+"/5]");

		//A)
		if (productoTipo=="alcohol" && (alcoholMasBaratoPrecio==0 || productoPrecio<alcoholMasBaratoPrecio))
		{
			alcoholMasBaratoPrecio = productoPrecio;
			alcoholMasBaratoUnidades = productoUnidades;
			alcoholMasBaratoFabricante = productoFabricante;
		}

		productoTipo = "";
		productoPrecio = 0;
		productoUnidades = 0;
		productoMarca = "";
		productoFabricante = "";

		contadorIngresos++;
	}

	alert("A) El Alcohol mas barato: Precio: "+alcoholMasBaratoPrecio+"$ Unidades: "+alcoholMasBaratoUnidades+". Fabricante: "+alcoholMasBaratoFabricante);
	alert("C) Cantidad de jabones en total: "+cantidadUnidadesJabon);
}