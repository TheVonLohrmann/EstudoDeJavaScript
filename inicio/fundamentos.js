/**
 * Variáveis e Tipos de Dados:
 * Existem três formas de se declarar variaveis em js
 * 1-Var
 * 2-let
 * 3-const
 */

// var(variavel) identificador(nome da variavel);
var numero = 3;
let string = 'a';// string né pode ser " "
let numeros = 6;// let e a mais usado para declarar uma variavel 
const numerais = 7;// const e uma variavel que não pode ser alterada 

/**
 * Operadores:
 * Familiarize-se com os operadores aritméticos (+, -, *, /)
 * operadores de atribuição (=, +=, -=)
 * operadores de comparação (==, ===, !=, !==)
 * operadores lógicos (&&, ||, !)
 */

const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);// nesse caso Math e um objeto

console.log(area);
console.log(typeof Math);

const escola = 'eita';
console.log(escola.charAt(3)); // charAt serve para retornar caracter pedido nesse caso e o a
console.log(escola.charCodeAt(3));//charCodeAt ao inves de chamar o caracter ele puxa o valor do caracter na tabela asci
console.log(escola.indexOf('a'));// é usado para determinar a posição (índice) da primeira ocorrência de um valor específico em uma string ou array. 
console.log(escola.substring(1));// ele vai colocar apartir do index definido
console.log(escola.substring(0,3));// ele vai colocar apartir do index definido e não inclui o ultomo indix definido
console.log('escola '.concat(escola).concat("!"));//é usado para combinar dois ou mais arrays. Ele não modifica os arrays originais
console.log(escola.replace(3, '4'));//é usado para substituir partes de uma string por outra string.
console.log('ana,maria,pedro'.split(','));//é usado para dividir uma string em um array de substrings, com base em um separador especificado.

//template:
/**
 * o termo "template" geralmente se refere a "template literals", também conhecidos como "template strings". 
 * Template literals são uma forma conveniente de criar strings em que você pode incorporar variáveis 
 * e expressões dentro da própria string, usando a sintaxe de ${expressão}.
 */
const nome = "Alice";
const idade = 30;

// Usando template literals para criar uma string
const mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;

console.log(mensagem);
// Output: "Olá, meu nome é Alice e eu tenho 30 anos."

const up = texto => texto.toUpperCase();//é um método de string em JavaScript que retorna uma nova string com todos os caracteres da string original convertidos para letras maiúsculas.
console.log(`ei... ${up('cuidado')}!`);