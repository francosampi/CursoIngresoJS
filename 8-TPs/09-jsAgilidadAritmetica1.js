/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

function comenzar()
{
    let operador;

    document.getElementById("txtIdPrimerNumero").value = Math.floor(Math.random() * 10) + 1;
    document.getElementById("txtIdSegundoNumero").value = Math.floor(Math.random() * 10) + 1;
    document.getElementById("txtIdOperador").value = Math.floor(Math.random() * 4);

    operador = document.getElementById("txtIdOperador").value;
    operador = parseInt(operador);

    switch(operador)
    {
        case 0:
            document.getElementById("txtIdOperador").value="Suma";
        break;
        case 1:
            document.getElementById("txtIdOperador").value="Resta";
        break;
        case 2:
            document.getElementById("txtIdOperador").value="Multiplicación";
        break;
        case 3:
            document.getElementById("txtIdOperador").value="División";
        break;
    }

}//FIN DE LA FUNCIÓN

function Responder()
{
    let numeroUno;
    let numeroDos;
    let respuesta;
    let operador;
    let respuestaCorrecta;

    numeroUno = document.getElementById("txtIdPrimerNumero").value;
    numeroUno = parseInt(numeroUno);
    
    numeroDos = document.getElementById("txtIdSegundoNumero").value;
    numeroDos = parseInt(numeroDos);

    respuesta = document.getElementById("txtIdRespuesta").value;
    respuesta = parseInt(respuesta);

    operador = document.getElementById("txtIdOperador").value;

    switch(operador)
    {
        case "Suma":
            respuestaCorrecta = numeroUno + numeroDos;
        break;
        case "Resta":
            respuestaCorrecta = numeroUno - numeroDos;
        break;
        case "Multiplicación":
            respuestaCorrecta = numeroUno * numeroDos;
        break;
        case "División":
            respuestaCorrecta = numeroUno / numeroDos;
            respuestaCorrecta = Math.floor(respuestaCorrecta.toFixed(1));
        break;
    }

    console.log(respuestaCorrecta)

    if (respuesta==respuestaCorrecta)
    {
        alert("Capo");
    }
    else
    {
        alert("Pifiaste");
    }

    comenzar();

}//FIN DE LA FUNCIÓN