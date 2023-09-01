/**
 * As funções de seta (arrow functions) são uma sintaxe alternativa e mais curta para criar
 * funções em JavaScript. Elas foram introduzidas no ECMAScript 6 (ES6) e são populares por
 * sua sintaxe concisa e por compartilharem o valor de 'this' do contexto em que são definidas.
 */

// Aqui está a sintaxe básica de uma função de seta:
const nomeDaFuncao = (parametro1, parametro2) => {
    // Código a ser executado
    return valorDeRetorno;
};

/**
 * Se a função tiver apenas uma expressão de retorno, você pode omitir as chaves '{}' e a instrução 'return':
 */

const dobrar = numero => numero * 2;

// As funções de seta têm algumas diferenças importantes em comparação com as funções tradicionais:

/**
 * 1- Valor de 'this' fixo: 
 *    O valor de 'this' em uma função de seta é herdado do contexto em
 *    que a função é definida. Isso evita a necessidade de usar o método 'bind()' ou criar 
 *    variáveis para armazenar o valor de 'this' em situações como manipuladores de eventos.
 * 
 * 2- Sem 'arguments': 
 *    As funções de seta não possuem o objeto 'arguments'. Se você 
 *    precisar de um número variável de argumentos, é melhor usar o operador spread (...).
 * 
 * 3- Não é possível ser usada como construtor: 
 *    As funções de seta não podem ser usadas com o operador 'new' para criar instâncias de objetos. 
 *    Elas não têm um '[[Construct]]' internamente.
 */

// Exemplo:
const saudacao = nome => {
    console.log("Olá, " + nome + "!");
  };
  
  saudacao("Alice"); // "Olá, Alice!"

/**
 * As funções de seta são especialmente úteis para funções curtas e expressões de retorno 
 * simples. No entanto, lembre-se de suas diferenças em relação às funções tradicionais e
 * use-as de acordo com o contexto e as necessidades do seu código.
 */

// Outro Exemplo:
const pessoa = {
    nome: "Alice",
    saudacao: function() {
      console.log("Olá, " + this.nome); // O "this" aqui se refere ao objeto "pessoa"
    },
    saudacaoArrow: () => {
      console.log("Olá, " + this.nome); // O "this" aqui não se refere ao objeto "pessoa", mas ao contexto de execução global (geralmente "window" no navegador)
    }
  };
  
  pessoa.saudacao();       // "Olá, Alice"
  pessoa.saudacaoArrow();  // "Olá, undefined"

/**
 * No exemplo acima, a função 'saudacao' usa a sintaxe tradicional de função e tem seu 
 * 'this' corretamente associado ao objeto 'pessoa'. Já a função 'saudacaoArrow' é uma
 * função de seta, e seu 'this' não se refere ao objeto 'pessoa', mas ao contexto de execução global.
 */

/**
 * É importante ter em mente essa diferença ao usar funções de seta e garantir que elas sejam
 * usadas nos cenários corretos, onde você deseja que o 'this' seja preservado com base no
 * escopo de definição da função.
 */