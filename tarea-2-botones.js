const boton_agregar = document.querySelector('#boton-agregar');
const boton_eliminar = document.querySelector('#boton-eliminar');
const formulario = document.querySelector('#formulario');

let integrantes = 0;

boton_agregar.onclick = function(){
    integrantes++;

    let etiqueta = document.createElement('label');
    let input = document.createElement('input');
    let division = document.createElement('div');

    input.setAttribute('type','number');
    input.setAttribute('value','Ingresos');
    input.setAttribute('class','ingreso');
    etiqueta.textContent = `Integrante ${integrantes}: `;

    division.appendChild(etiqueta);
    division.appendChild(input);
    formulario.appendChild(division)

    return false;
}

boton_eliminar.onclick = function(){
    if (integrantes === 0){
        return false;
    }else{
        integrantes--;
        formulario.lastChild.remove();
    }
    
    return false;
}