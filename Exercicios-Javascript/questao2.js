/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados.
 * (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
 */
console.log('|-----------------------------------------|');
function classetriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero";
    }if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

const primeiro = 2;
const segundo = 2;
const terceiro = 3;

const classie = classetriangulo(primeiro, segundo, terceiro);
console.log(`| O triângulo é ${classie}`);
console.log('|-----------------------------------------|');

function classtri(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero";
    }if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

const resultado = classtri(5, 5, 5);
console.log(`| O triângulo é ${resultado} `);

const resultado2 = classtri(1, 5, 5);
console.log(`| O triângulo é ${resultado2} `);

const resultado3 = classtri(3, 4, 5);
console.log(`| O triângulo é ${resultado3} `);
console.log('|-----------------------------------------|');