function mostrar()
{
  let productoTipo;
  let cantidadBolsas;
  let precioBolsa;
  //A y B)
  let totalAPagar;
  let totalAPagarConDescuento;
  let descuento;
  //D)
  let cantidadBolsasArena;
  let cantidadBolsasCal;
  let cantidadBolsasCemento;
  //F)
  let tipoMasCaro;
  let seguir;
  
  totalAPagar = 0;
  totalAPagarConDescuento = 0;
  descuento = 1;
  cantidadBolsasArena = 0;
  cantidadBolsasCal = 0;
  cantidadBolsasCemento = 0;
  seguir = true;

  while(seguir)
  {
    while(productoTipo!="arena" && productoTipo!="cal" && productoTipo!="cemento")
    {
      productoTipo = prompt("Ingrese tipo de producto (arena/cal/cemento)");
    }

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
    cantidadBolsas = parseInt(cantidadBolsas);

    precioBolsa = prompt("Ingrese el precio por bolsa");
    precioBolsa = parseInt(precioBolsa);

    switch(productoTipo)
    {
      case "arena":
        cantidadBolsasArena+=cantidadBolsas;
      break;
      case "cal":
        cantidadBolsasCal+=cantidadBolsas;
      break;
      case "cemento":
        cantidadBolsasCemento+=cantidadBolsas;
      break;
    }

    totalAPagar += (cantidadBolsas*precioBolsa);

    if (cantidadBolsas>30)
    {
      descuento = 0.75;
    }
    else
    {
      if (cantidadbolsas>10)
      {
        descuento = 0.85;
      }
    }
    totalAPagarConDescuento += (totalAPagar*descuento);

    productoTipo="";

    seguir=confirm("Desea continuar?");
  }

  //A)
  alert("Importe bruto: "+totalAPagar);
  //B)
  if (descuento!=1)
  {
    alert("Importe con descuento: "+totalAPagarConDescuento);
  }
  //C)
  if (cantidadBolsasArena>cantidadBolsasCal && cantidadBolsasArena>cantidadBolsasCemento)
  {
    alert("El tipo con mas cantidad de bolsas: Arena");
  }
  else
  {
    if (cantidadBolsasCal>cantidadBolsasArena && cantidadBolsasCal>cantidadBolsasCemento)
    {
      alert("El tipo con mas cantidad de bolsas: Cal");
    }
    else
    {
      if (cantidadBolsasCemento>cantidadBolsasCal && cantidadBolsasCemento>cantidadBolsasArena)
      {
        alert("El tipo con mas cantidad de bolsas: Cemento");
      }
    }
  }
}