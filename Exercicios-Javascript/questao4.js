/**
 * ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores
 */
console.log('|-----------------------------------------|');
function divide(dividendo, divisor){
    const D = dividendo / divisor;
    const div = dividendo % divisor;
    console.log(`| o resultado é ${D} e ${div}`);
}

divide(10, 5);

console.log('|-----------------------------------------|');

function calcularDivisaoEresto(dividendo1, divisor1) {
    const resultado = Math.floor(dividendo1 / divisor1); 
    const resto = dividendo1 % divisor1; 

    console.log(`| Resultado da divisão: ${resultado}`);
    console.log(`| Resto da divisão: ${resto}`);
}

calcularDivisaoEresto(10, 5);
console.log('|-----------------------------------------|');