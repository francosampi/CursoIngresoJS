/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetroRectangulo;

    let cantidadAlambre;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    perimetroRectangulo = (2*largo + 2*ancho);
    cantidadAlambre = perimetroRectangulo*3;

    alert("Cantidad de alambre necesario: "+cantidadAlambre);

}
function Circulo () 
{
	let radio;
    let perimetroCirculo;

    let cantidadAlambre;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    perimetroCirculo = radio*3.14*2;

    cantidadAlambre = perimetroCirculo*3;
    cantidadAlambre = cantidadAlambre.toFixed(2);

    alert("Cantidad de alambre necesario: "+cantidadAlambre);
}
function Materiales ()
{
	let largo;
    let ancho;

    let bolsasCemento;
    let bolsasCal;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    bolsasCemento = (largo+ancho)*2;
    bolsasCal = (largo+ancho)*3;

    alert("Se necesitan "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" de cal.");
}