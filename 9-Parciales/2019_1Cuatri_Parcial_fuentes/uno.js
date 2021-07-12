/*
Parcial 2019 (Ejercicio 1)

Sampietro, Franco
DIV. D
*/

function mostrar()
{
    let lado;
    let perimetro;

    lado = prompt("Ingrese el valor del lado del triángulo equilátero");
    lado = parseInt(lado);

    perimetro = lado*3;

    alert("El perímetro mide: "+perimetro);
}