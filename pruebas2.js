function validarCalcularMayorSalarioAnual(){
    console.assert(calcularMayorSalarioAnual([1,2,3,4,500,6,7,8]) == 500,
    'calcularMayorSalarioAnual tuvo que haber devuelto 500'
    );
}

function validarCalcularMenorSalarioAnual(){
    console.assert(calcularMenorSalarioAnual([2,3,4,5,1,6,7,8,9]) == 1,
    'calcularMenorSalarioAnual tuvo que haber devuelto 1'
    );
}

function validarCalcularPromedioAnual(){
    console.assert(calcularPromedioAnual([1,2,3,4,5,6,7,8,9]) == 5,
    'calcularPromedioAnual tuvo que haber devuelto 5'
    );
}

function validarCalcularPromedioMensual(){
    console.assert(calcularPromedioMensual([12,24,36,48,60,72,84,96,108]) == 5,
    'calcualrPromedioMensual tuvo que haber dado 5'
    );
}

validarCalcularMayorSalarioAnual();
validarCalcularMenorSalarioAnual();
validarCalcularPromedioAnual();
validarCalcularPromedioMensual();