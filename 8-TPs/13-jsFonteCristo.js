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

function NumerosPares()
{
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    let numeroIngresadoMensaje;
    let contador;

    numeroIngresado = parseInt(numeroIngresado);
    numeroIngresadoMensaje = numeroIngresado;
    contador=0;

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

function NumerosImpares()
{
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

function NumerosDivisibles()
{
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    let contadorHastaCien;
    let contadorDivisibles;

    numeroIngresado = parseInt(numeroIngresado);
    contadorHastaCien = 1;
    contadorDivisibles = 0;

    while(contadorHastaCien<100)
    {
        if (contadorHastaCien%numeroIngresado==0)
        {
            contadorDivisibles++;
        }
        contadorHastaCien++;
    }

    alert("Existen "+contadorDivisibles+" numeros divisibles por "+numeroIngresado+" del 1 al 100.");
}

function VerificarPrimo()
{
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    let contador;
    let esPrimo;
    
    numeroIngresado = parseInt(numeroIngresado);
    contador = numeroIngresado-1;
    esPrimo = true;

    while(contador>1)
    {
        if (numeroIngresado%contador==0)
        {
            esPrimo = false;
        }
        contador--;
    }

    if (esPrimo)
    {
        alert(numeroIngresado+" es un número primo.");
    }
    else
    {
        alert(numeroIngresado+" no es un número primo.");
    }
}

function NumerosPrimos()
{
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    let contadorHastaCero;
    let contadorHastaCeroInterno;
    let contadorVerificarPrimo;
    let contadorPrimos;

    numeroIngresado = parseInt(numeroIngresado);
    contadorHastaCero = numeroIngresado;
    contadorVerificarPrimo = true;
    contadorPrimos = 0;

    while(contadorHastaCero>0)
    {
        contadorVerificarPrimo = true;
        contadorHastaCeroInterno = contadorHastaCero-1;

        while(contadorHastaCeroInterno>1)
        {
            if (contadorHastaCero%contadorHastaCeroInterno==0)
            {
                contadorVerificarPrimo = false;
            }
            contadorHastaCeroInterno--;
        }
        if (contadorVerificarPrimo)
        {
            contadorPrimos++;
        }
        contadorHastaCero--;
    }
    alert("Existen "+contadorPrimos+" número(s) primo(s) a partir del número "+numeroIngresado+" hasta el 0.");
}