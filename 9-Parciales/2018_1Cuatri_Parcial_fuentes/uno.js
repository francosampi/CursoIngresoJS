/*
P18-1

Sampietro, Franco
DIV. D
*/
function mostrar()
{
    let largo;
    let ancho;
    let perimetro;

    largo = prompt("Ingrese el largo del rectángulo");
    largo = parseInt(largo);
    ancho = prompt("Ingrese el ancho del rectángulo");
    ancho = parseInt(ancho);

    perimetro = largo*2 + ancho*2;

    alert("El perimetro mide: " + perimetro);
}
