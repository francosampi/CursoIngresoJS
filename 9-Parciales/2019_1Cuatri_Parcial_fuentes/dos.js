/*
Parcial 2019 (Ejercicio 2)

Sampietro, Franco
DIV. D
*/

function mostrar()
{
  let nombreUno;
  let nombreDos;

  let pesoUno;
  let pesoDos;
  let sumaPeso;
  let promedioPeso;

  let mensaje;

  nombreUno = prompt("Ingrese su nombre (1)");
  nombreDos = prompt("Ingrese su nombre (2)");

  pesoUno = prompt("Ingrese su peso (1)");
  pesoUno = parseInt(pesoUno);

  pesoDos = prompt("Ingrese su peso (2)");
  pesoDos = parseInt(pesoDos);

  sumaPeso = pesoUno+pesoDos;
  promedioPeso = (pesoUno+pesoDos)/2;

  mensaje = "Ustedes se llaman "+nombreUno+" y "+nombreDos;
  mensaje += ", pesan "+pesoUno+" y "+pesoDos+", que sumados son "+sumaPeso;
  mensaje += " y el promedio es "+promedioPeso;

  alert(mensaje);
}