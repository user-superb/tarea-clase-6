function calcularMayorSalarioAnual(ingresos){
    let max = -Infinity;

    for(let valor of ingresos){
        let salarioAnual = Number(valor) | 0;
        if ((salarioAnual > max) && (salarioAnual !== 0)){
            max = salarioAnual;
        }
    }

    return max;
}

function calcularMenorSalarioAnual(ingresos){
    let min = Infinity;

    for(let valor of ingresos){
        let salarioAnual = Number(valor) | 0;
        if ((salarioAnual < min) && (salarioAnual !== 0)){
            min = salarioAnual;
        }
    }

    return min;
}

function calcularPromedioAnual(ingresos){
    let promedio = 0;
    
    if (ingresos.length === 0){
        return 0;
    }else{
        for (let valor of ingresos){
            let salarioAnual = Number(valor) | 0;
            promedio += salarioAnual;
        }
    }
    
    return promedio / ingresos.length;
}

function calcularPromedioMensual(ingresos){
    let promedio = 0;

    if (ingresos.length === 0){
        return 0;
    }else{
        for (let valor of ingresos){
            let salarioMensual = Number(valor) | 0;
            salarioMensual = salarioMensual / 12;
            promedio += salarioMensual; 
        }
    }

    return promedio / ingresos.length;
}


const calcular = document.querySelector('#calcular');

calcular.onclick = function(){
    const $ingresos = document.querySelectorAll('.ingreso');
    const ingresos = [];

    $ingresos.forEach(ingreso => {
        ingresos.push(ingreso.value);
    });

    const texto_mayor_salario = document.querySelector('#mayor-salario-anual');
    const texto_menor_salario = document.querySelector('#menor-salario-anual');
    const texto_salario_anual_promedio = document.querySelector('#salario-anual-promedio');
    const texto_salario_mensual_promedio = document.querySelector('#salario-mensual-promedio');

    texto_mayor_salario.textContent = `Mayor salario anual: $ ${calcularMayorSalarioAnual(ingresos)}`;
    texto_menor_salario.textContent = `Menor salario anual: $ ${calcularMenorSalarioAnual(ingresos)}`;
    texto_salario_anual_promedio.textContent = `Salario anual promedio: $ ${calcularPromedioAnual(ingresos)}`;
    texto_salario_mensual_promedio.textContent = `Salario mensual promedio: $ ${calcularPromedioMensual(ingresos)}`;

    return false;
}