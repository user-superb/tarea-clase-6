function calcularMenorEdad(valores){
    let menorEdad = Infinity;
    for(let edadActual of valores){
        if (Number(edadActual.value) < menorEdad){
            menorEdad = Number(edadActual.value);
        }
    }
    return menorEdad;
}

function calcularMayorEdad(valores){
    let mayorEdad = -Infinity;
    for (let edadActual of valores){
        if(Number(edadActual.value) > mayorEdad){
            mayorEdad = Number(edadActual.value);
        }
    }
    
    return mayorEdad;
}

function calcularEdadPromedio(valores){
    let promedio = 0;
    if (valores.length = 0){
        return 0;
    } else {
        for (let edadActual of valores){
            promedio += Number(edadActual.value);
        }

        promedio = promedio / valores.length;
    }

    return promedio;
}


calcular.onclick = function(){
    const edades = document.querySelectorAll('.edad-familiar');
    const texto_Menor_Edad = document.querySelector('#menor-edad');
    const texto_Mayor_Edad = document.querySelector('#mayor-edad');
    const texto_Edad_Promedio = document.querySelector('#edad-promedio');

    texto_Menor_Edad.textContent = `Menor Edad = ${calcularMenorEdad(edades)} `;
    texto_Mayor_Edad.textContent = `Mayor Edad = ${calcularMayorEdad(edades)} `;
    texto_Edad_Promedio.textContent = `Promedio = ${calcularEdadPromedio(edades)}`;

    texto_Menor_Edad.removeAttribute('hidden');
    texto_Mayor_Edad.removeAttribute('hidden');
    texto_Edad_Promedio.removeAttribute('hidden');

    return false;
}

