/**
 * Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração
 * multiplicação e divisão desses valores.
 */
console.log('|-----------------------------------------|');
function dados(a, b) {
    console.log('| soma: ' + a + b);
    console.log('| subtração: ', a - b);
    console.log('| divisão: ' + a / b);
    console.log('| multiplicação: ' + a * b);
}

dados(10,20);
console.log('|-----------------------------------------|');

function dados2(c, d, operacao) {
    return operacao(c,d);
}

const soma = (x, y) => x + y;
const subtracao = (x, y) => x - y;
const divisao = (x, y) => x / y;
const multiplicacao = (x, y) => x * y;

console.log('| soma: ' + dados2(10, 10, soma));
console.log('| subtração: ' + dados2(20, 15, subtracao));
console.log('| divisão: ' + dados2(9, 3, divisao));
console.log('| multiplicação: ' + dados2(5, 20, multiplicacao));

console.log('|-----------------------------------------|');

function calcularOperacoes(valor1, valor2) {
    const soma = valor1 + valor2;
    const subtracao = valor1 - valor2;
    const multiplicacao = valor1 * valor2;
    const divisao = valor1 / valor2;

    console.log(`| Soma: ${soma}`);
    console.log(`| Subtração: ${subtracao}`);
    console.log(`| Multiplicação: ${multiplicacao}`);
    console.log(`| Divisão: ${divisao}`);
}

calcularOperacoes(10, 5);
console.log('|-----------------------------------------|');
