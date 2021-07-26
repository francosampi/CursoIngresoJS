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
  let precioTotalArena;
  let precioTotalCal;
  let precioTotalCemento;
  let tipoMasCaro;

  let seguir;
  
  totalAPagar = 0;
  totalAPagarConDescuento = 0;
  descuento = 1;
  cantidadBolsasArena = 0;
  cantidadBolsasCal = 0;
  cantidadBolsasCemento = 0;
  precioTotalArena = 0;
  precioTotalCal = 0;
  precioTotalCemento = 0;
  seguir = true;

  while(seguir)
  {
    while(productoTipo!="arena" && productoTipo!="cal" && productoTipo!="cemento")
    {
      productoTipo = prompt("Ingrese tipo de producto (arena/cal/cemento)");
      productoTipo = productoTipo.toLowerCase();
    }

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
    cantidadBolsas = parseInt(cantidadBolsas);

    precioBolsa = prompt("Ingrese el precio por bolsa");
    precioBolsa = parseInt(precioBolsa);

    totalAPagar += (cantidadBolsas*precioBolsa);

    if (cantidadBolsas>30)
    {
      descuento = 0.75;
    }
    else
    {
      if (cantidadBolsas>10)
      {
        descuento = 0.85;
      }
    }
    totalAPagarConDescuento = (totalAPagar*descuento);

    switch(productoTipo)
    {
      case "arena":
        cantidadBolsasArena+=cantidadBolsas;
        precioTotalArena+=totalAPagarConDescuento;
      break;
      case "cal":
        cantidadBolsasCal+=cantidadBolsas;
        precioTotalCal+=totalAPagarConDescuento;
      break;
      case "cemento":
        cantidadBolsasCemento+=cantidadBolsas;
        precioTotalCemento+=totalAPagarConDescuento;
      break;
    }

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
  //D)
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
  //F)
  if (precioTotalArena>precioTotalCal && precioTotalArena>precioTotalCemento)
  {
    alert("El tipo mas caro: Arena");
  }
  else
  {
    if (precioTotalCal>precioTotalArena && precioTotalCal>precioTotalCemento)
    {
      alert("El tipo mas caro: Cal");
    }
    else
    {
      if (precioTotalCemento>precioTotalCal && precioTotalCemento>precioTotalArena)
      {
        alert("El tipo mas caro: Cemento");
      }
    }
  }
}