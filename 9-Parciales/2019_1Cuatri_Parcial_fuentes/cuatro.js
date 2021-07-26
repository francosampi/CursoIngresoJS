function mostrar()
{
    let numeroUno;
    let numeroDos;
    let resultado;

    numeroUno = prompt("Ingrese el primer numero");
    numeroUno = parseInt(numeroUno);

    numeroDos = prompt("Ingrese el segundo numero");
    numeroDos = parseInt(numeroDos);

    if(numeroUno==numeroDos)
    {
        alert(numeroUno+""+numeroDos);
    }
    else
    {
        if(numeroUno>numeroDos)
        {
            resultado = numeroUno-numeroDos;
        }
    }
        
    if (resultado>10)
    {
        alert("La resta da "+resultado+" y superó el 10");
    }
    else
        resultado = numeroUno+numeroDos;
}