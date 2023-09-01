/**
 * Funções anônimas são funções que não têm um nome identificador. Elas são definidas
 * diretamente como expressões dentro de uma instrução ou são atribuídas a variáveis. 
 * Funções anônimas são amplamente utilizadas em JavaScript e são frequentemente
 * passadas como argumentos para outras funções ou usadas em situações em que uma
 * função é necessária, mas não precisa de um nome identificador.
 */

// Aqui estão alguns exemplos de funções anônimas:

// 1-Função Anônima em uma Expressão de Função:
const soma = function(x, y) {
    return x + y;
};

// Neste exemplo, a função que realiza a soma é uma função anônima atribuída à variável soma.

// 2-Função Anônima em um Callback:
setTimeout(function() {
    console.log("Isso é um callback!");
}, 1000);

// Aqui, uma função anônima é passada como um callback para a função 'setTimeout'.

// 3-Função Anônima Imediatamente Invocada (IIFE):
(function() {
    console.log("Isso é uma IIFE (Immediately Invoked Function Expression)!");
})();

// Esta é uma função anônima que é definida e invocada imediatamente.

/**
 * Funções anônimas são particularmente úteis em situações em que você deseja encapsular
 * um bloco de código e usá-lo localmente, como em callbacks, closures ou em cenários onde
 * não é necessário reutilizar a função em outros lugares do código. No entanto, com as 
 * melhorias introduzidas no ECMAScript 6 (ES6), como as funções de seta (=>), as funções
 * anônimas agora são menos comuns em favor de funções de seta e funções nomeadas.
 */
  