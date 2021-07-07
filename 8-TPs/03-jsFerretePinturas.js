/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let aCelsius;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseInt(temperatura);

    aCelsius = (temperatura - 32) * 5/9;
    aCelsius = aCelsius.toFixed(2);

    alert(temperatura+"º Farenheit equivale a "+aCelsius+"º Celsius");

}

function CentigradosFahrenheit () 
{
    let temperatura;
    let aFarenheit;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseInt(temperatura);

    aFarenheit = (temperatura * 5/9) + 32;
    aFarenheit = aFarenheit.toFixed(2);

    alert(temperatura+"º Celsius equivale a "+aFarenheit+"º Farenheit");
}
