/**
 * Em JavaScript, um array é uma estrutura de dados que armazena uma coleção ordenada de elementos.
 * Cada elemento em um array pode ser de qualquer tipo de dado, incluindo outros arrays.
 * Os arrays são muito versáteis e amplamente usados para armazenar e manipular listas de informações.
 * Aqui está como você pode usar arrays em JavaScript:
 */

// Criar um Array:

// Você pode criar um array usando colchetes [] e listando os elementos separados por vírgulas:
const numeros = [1, 2, 3, 4, 5];
const frutas = ["maçã", "banana", "laranja"];
const misto = [1, "texto", true];

// Acessar Elementos:

// Os elementos em um array são acessados usando índices baseados em zero:
const primeiraFruta = frutas[0]; // "maçã"
const segundaFruta = frutas[1];  // "banana"

// Tamanho do Array (Propriedade length):

// A propriedade length retorna o número de elementos em um array:
const tamanho = numeros.length; // 5

// Modificar Elementos:

// Você pode modificar elementos de um array atribuindo um novo valor a um índice específico:
frutas[1] = "abacaxi"; // frutas agora é ["maçã", "abacaxi", "laranja"]

// Adicionar e Remover Elementos:

// Os métodos .push(), .pop(), .unshift() e .shift() são usados para adicionar e remover elementos em arrays:
numeros.push(6); // [1, 2, 3, 4, 5, 6]
const ultimoElemento = numeros.pop(); // 6, numeros agora é [1, 2, 3, 4, 5]

console.log(ultimoElemento);

numeros.unshift(0); // [0, 1, 2, 3, 4, 5]
const primeiroElemento = numeros.shift(); // 0, numeros agora é [1, 2, 3, 4, 5]

console.log(primeiroElemento);

// Iterar Sobre um Array:

// Você pode usar loops, como for e for...of, para iterar sobre os elementos de um array:
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for (const fruta of frutas) {
  console.log(fruta);
}

/**
 * Arrays são uma estrutura de dados fundamental em programação, permitindo que você 
 * organize e manipule conjuntos de informações de maneira eficiente. Eles são amplamente
 * usados para lidar com listas de itens, como registros de dados, valores de opções e muito mais.
 */