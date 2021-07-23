/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/


function ComenzarIngreso () 
{
 	
}

function NumerosPares(){
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    let numeroIngresadoMensaje;
    let contador;

    numeroIngresado = parseInt(numeroIngresado);
    numeroIngresadoMensaje = numeroIngresado;
    contador=0;

    /*while(isNaN(numeroIngresado) || numeroIngresado<0)
    {
        alert("Error, el dato ingresado no es un numero positivo");
        document.getElementById("txtIdNumero").value = "";
    }*/

    if (numeroIngresado%2==1)
    {
        numeroIngresado--;
    }

    while(numeroIngresado>0)
    {
        numeroIngresado-=2;

        if (numeroIngresado!=0)
        {
            contador++;
        }
    }

    alert("Existen "+contador+" numeros pares del "+numeroIngresadoMensaje+" al 0.");
}

function NumerosImpares(){
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    let numeroIngresadoMensaje;
    let contador;

    numeroIngresado = parseInt(numeroIngresado);
    numeroIngresadoMensaje = numeroIngresado;
    contador=0;

    if (numeroIngresado%2==0)
    {
        numeroIngresado--;
    }

    while(numeroIngresado>0)
    {
        numeroIngresado-=2;

        if (numeroIngresado!=0)
        {
            contador++;
        }
    }

    alert("Existen "+contador+" numeros impares del "+numeroIngresadoMensaje+" al 0.");
}

function NumerosDivisibles(){
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    let contadorHastaCien;
    let contadorDivisibles;

    numeroIngresado = parseInt(numeroIngresado);
    contadorHastaCien = 1;
    contadorDivisibles = 0;

    if (contadorHastaCien<100)
    {
        if (numeroIngresado%contadorHastaCien==0)
        {
            contadorDivisibles++;
        }
        contadorHastaCien++;
    }

    alert("Existen "+contadorDivisibles+" numeros divisibles por "+numeroIngresadoMensaje+" del 1 al 100.");
}