/**
 * Em JavaScript, o tipo de dado number é usado para representar valores numéricos, sejam
 * eles números inteiros ou de ponto flutuante (números com casas decimais).
 * Os números em JavaScript são representados internamente usando o padrão IEEE 754 double-precision
 * floating-point, o que significa que até mesmo números inteiros podem ter pequenas 
 * imprecisões quando são armazenados em variáveis do tipo number.
 */

// Aqui estão alguns exemplos de uso do tipo number:

const inteiro = 42;         // Número inteiro
const decimal = 3.14;       // Número de ponto flutuante
const notacaoCientifica = 2.5e3;  // Notação científica (2.5 * 10^3)
const negativo = -10;       // Número negativo

/**
 * Operações matemáticas básicas, como adição, subtração, multiplicação e divisão, podem
 * ser realizadas com variáveis do tipo number:
 */

const a = 10;
const b = 5;
const soma = a + b;     // 15
const subtracao = a - b; // 5
const multiplicacao = a * b; // 50
const divisao = a / b;  // 2

/**
 * Vale a pena mencionar que, devido às imprecisões associadas ao uso de ponto flutuante, 
 * você pode encontrar resultados inesperados em algumas situações:
 */

console.log(0.1 + 0.2); // Saída: 0.30000000000000004

//Nesses casos, é uma boa prática arredondar ou formatar os resultados, se a precisão for importante.

