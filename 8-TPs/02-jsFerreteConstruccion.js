/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;

    let rectangulo;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    rectangulo = (largo*ancho)/3;

    alert(rectangulo);

}
function Circulo () 
{
	let radio;

    let circulo;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    circulo = (Math.pow(radio*3.14, 2))/3;

    alert(circulo);
}
function Materiales ()
{
	let largo;
    let ancho;

    let bolsas;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    bolsas = (largo+ancho)*3;

    alert("Se necesitan "+bolsas+" bolsas.")
}