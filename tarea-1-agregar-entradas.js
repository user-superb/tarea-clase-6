const formulario = document.querySelector('#formulario');
const base = document.querySelector('#base');
const calcular = document.querySelector('#calcular');

for (let i = 0; i < integrantesFamilia; i++){
    let nuevoNodo;
    nuevoNodo = base.cloneNode(true);
    nuevoNodo.firstElementChild.textContent += ` ${i + 1}: `
    formulario.insertBefore(nuevoNodo, calcular)
};

base.remove();