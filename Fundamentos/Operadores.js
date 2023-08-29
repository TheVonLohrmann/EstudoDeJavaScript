//-------------------------------------------------------------------------------------------------------|
// Operadores: Aritméticos
//-------------------------------------------------------------------------------------------------------|

/**
 * Os operadores aritméticos em JavaScript são usados para realizar operações matemáticas
 * em valores numéricos. Aqui estão os operadores aritméticos básicos:
 */

// 1. Adição (+):

// Realiza a adição entre dois valores numéricos.
const soma = 5 + 3; // 8

// 2. Subtração (-):

// Realiza a subtração entre dois valores numéricos.
const diferenca = 10 - 4; // 6

// 3. Multiplicação (*):

// Realiza a multiplicação entre dois valores numéricos.
const produto = 3 * 6; // 18

// 4. Divisão (/):

// Realiza a divisão entre dois valores numéricos.
const quociente = 20 / 4; // 5

// 5. Módulo (%):

// Retorna o resto da divisão entre dois valores numéricos.
const resto = 11 % 3; // 2 (resto da divisão de 11 por 3)

// 6. Incremento (++) e Decremento (--):

// Adiciona 1 ou subtrai 1 do valor de uma variável.
let numero = 5;
numero++; // Agora, numero é 6
numero--; // Agora, numero é 5 novamente

/**
 * Lembre-se de que os operadores aritméticos respeitam as regras da matemática, como 
 * ordem de precedência e regras de agrupamento. Você também pode usar parênteses para
 * controlar a ordem das operações, se necessário.
 */

const resultado = (5 + 3) * 2; // 16 (primeiro a soma, depois a multiplicação)

/**
 * Os operadores aritméticos são amplamente usados para realizar cálculos em JavaScript,
 * seja para realizar tarefas simples ou para criar lógica mais complexa em seus programas.
 */


//-------------------------------------------------------------------------------------------------------|
// Operadores: Relacionais
//-------------------------------------------------------------------------------------------------------|


/**
 * Os operadores relacionais em JavaScript são usados para comparar valores e determinar a
 * relação entre eles. Eles retornam um valor booleano ('true' ou 'false') com base no
 * resultado da comparação. Aqui estão os operadores relacionais básicos:
 */

// 1. Igual (==):

/**
 * Verifica se dois valores são iguais. Lembre-se de que ele faz coerção de tipo, o que significa
 * que os valores de tipos diferentes podem ser considerados iguais.
 */
console.log(5 == 5);     // true
console.log("5" == 5);   // true (coerção de tipo)
console.log(5 == "5");   // true (coerção de tipo)
console.log(5 == 10);    // false

// 2. Não Igual (!=):

// Verifica se dois valores não são iguais.
console.log(5 != 10);    // true
console.log(5 != "5");   // false (coerção de tipo)
console.log(5 != 5);     // false

// 3. Estritamente Igual (===):

// Verifica se dois valores são iguais e do mesmo tipo. Diferentemente de ==, não faz coerção de tipo.
console.log(5 === 5);    // true
console.log("5" === 5);  // false
console.log(5 === "5");  // false

// 4. Estritamente Não Igual (!==):

// Verifica se dois valores não são iguais e/ou não são do mesmo tipo.
console.log(5 !== 10);   // true
console.log(5 !== "5");  // true
console.log(5 !== 5);    // false

// 5. Maior que (>):

// Verifica se o primeiro valor é maior que o segundo valor.
console.log(10 > 5);     // true
console.log(5 > 10);     // false

// 6. Menor que (<):

// Verifica se o primeiro valor é menor que o segundo valor.
console.log(5 < 10);     // true
console.log(10 < 5);     // false

// 7. Maior ou Igual (>=):

// Verifica se o primeiro valor é maior ou igual ao segundo valor.
console.log(10 >= 5);    // true
console.log(5 >= 10);    // false
console.log(5 >= 5);     // true

// 8. Menor ou Igual (<=):

// Verifica se o primeiro valor é menor ou igual ao segundo valor.
console.log(5 <= 10);    // true
console.log(10 <= 5);    // false
console.log(5 <= 5);     // true

/**
 * Os operadores relacionais são frequentemente usados em estruturas de controle
 * condicional (como 'if', 'else if', 'switch') e em comparações em geral. Eles permitem
 * que você avalie as relações entre valores para tomar decisões em seu código.
 */


//-------------------------------------------------------------------------------------------------------|
// Operadores: Lógicos
//-------------------------------------------------------------------------------------------------------|


/**
 * Os operadores lógicos em JavaScript são usados para combinar ou modificar expressões
 * booleanas e produzir um novo valor booleano. Eles são frequentemente usados para criar
 * lógica condicional e tomar decisões com base em múltiplas condições. Aqui estão os
 * operadores lógicos básicos:
 */

// 1. E Lógico (&&):

/**
 * O operador '&&' retorna 'true' se ambas as expressões à esquerda e à direita forem
 * verdadeiras. Caso contrário, retorna 'false'.
 */
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// 2. Ou Lógico (||):

/**
 * O operador '||' retorna 'true' se pelo menos uma das expressões à esquerda ou à direita
 * for verdadeira. Retorna 'false' somente se ambas as expressões forem falsas.
 */
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// 3. Não Lógico (!):

/**
 * O operador '!' inverte o valor de uma expressão booleana. Se a expressão for verdadeira,
 * '!' a tornará falsa, e vice-versa.
 */
console.log(!true);  // false
console.log(!false); // true

// Combinando Operadores Lógicos:

// Você pode combinar operadores lógicos para criar expressões mais complexas:
const idade = 25;
const temCarteiraDeMotorista = true;

if (idade >= 18 && temCarteiraDeMotorista) {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}

/**
 * Nesse exemplo, a condição é verdadeira somente se a idade for igual ou maior que 18 e a
 * pessoa tiver uma carteira de motorista.
 */

/**
 * Os operadores lógicos são uma parte fundamental da programação, permitindo que você
 * tome decisões com base em múltiplas condições. Eles são frequentemente usados com
 * estruturas de controle condicional, como 'if', 'else' e 'switch'.
 */


//-------------------------------------------------------------------------------------------------------|
// Operadores: Unários
//-------------------------------------------------------------------------------------------------------|


/**
 * Os operadores unários em JavaScript são operadores que atuam em um único operando,
 * modificando seu valor ou realizando uma operação específica. Aqui estão alguns
 * operadores unários comuns:
 */

// 1.Operador de Tipo de Dado ('typeof'):

// Retorna uma string que representa o tipo de dado do operando.
console.log(typeof 42);      // "number"
console.log(typeof "texto"); // "string"
console.log(typeof true);    // "boolean"

// 2.Operador de Delete ('delete'):

// Usado para excluir uma propriedade de um objeto ou elemento de um array.
const pessoa = { nome: "Alice", idade: 30 };
delete pessoa.idade; // Remove a propriedade "idade" do objeto

// 3.Operador de 'void':

// O operador 'void' é usado para avaliar uma expressão sem retornar um valor. Ele retorna 'undefined'.
const resultado1 = void 0; // resultado é undefined

/**
 * Esses são alguns dos operadores unários mais comuns em JavaScript. Eles podem ser
 * usados para realizar várias operações, como atualizar valores, inverter sinais, verificar tipos 
 * de dados e muito mais.
 */