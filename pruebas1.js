function validarCalcularMenorEdad(){
    console.assert(calcularMenorEdad([5,4,3,4,5,6,1,7]) === 1,
    'calcularMenorEdad tuvo que haber devuelto "1"'
    );

};

function validarCalcularMayorEdad(){
    console.assert(calcularMayorEdad([1,2,3,4,5,4,3,9,2,1]) == 9,
    'calcularMayorEdad tuvo que haber devuelvo "9"'
    );
};

function validarCalcularEdadPromedio(){
    console.assert(calcularEdadPromedio([1,2,3,4,5,6,7,8,9]) == 5,
    'calcularEdadPromedio tuvo que haber devuelvo "5"'
    );
};

validarCalcularMenorEdad();
validarCalcularMayorEdad();
validarCalcularEdadPromedio();