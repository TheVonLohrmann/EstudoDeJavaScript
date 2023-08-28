/**
 * O hoisting é um comportamento específico do JavaScript em relação à declaração de
 * variáveis e funções. Ele se refere ao fato de que, durante a fase de compilação (antes da
 * execução real do código), as declarações de variáveis e funções são movidas para o topo do
 * seu escopo, dando a impressão de que foram "elevadas" (hoisted) para o início do código.
 */

// Vamos entender como o hoisting funciona para variáveis e funções:

// 1. Hoisting de Variáveis:

/**
 * Quando uma variável é declarada usando 'var', a declaração é hoisted (elevada) para o
 * topo do escopo em que a variável está definida. No entanto, a atribuição do valor à variável
 * não é hoisted, então ela permanece indefinida até que a atribuição seja feita.
 */

// Exemplo:
console.log(nome); // undefined
var nome = "Alice";
console.log(nome); // "Alice"

// Isso acontece porque a declaração 'var nome' é hoisted para o topo, mas a atribuição "Alice" não é.

// 2. Hoisting de Funções:

/**
 * Quando uma função é declarada usando 'function', tanto a declaração quanto a definição 
 * da função são hoisted para o topo do escopo.
 */

// Exemplo:
saudacao(); // "Olá!"

function saudacao() {
  console.log("Olá!");
}

// Aqui, a função 'saudacao()' é hoisted, então pode ser chamada antes de sua declaração no código.

// Importante:

/**
 * O hoisting pode causar comportamentos inesperados se você não estiver ciente disso.
 * Por exemplo, com variáveis, o hoisting pode fazer parecer que você está acessando uma variável 
 * antes de ela ser declarada, resultando em 'undefined'.
 */

/**
 * Para evitar confusões, é recomendável sempre declarar suas variáveis antes de usá-las e 
 * organizar seu código de forma clara. Prefira usar 'let' e 'const' para declarar variáveis,
 * pois eles têm um escopo mais restrito e evitam alguns dos problemas associados ao hoisting do 'var'.
 */

/**
 * Embora o hoisting possa parecer um pouco confuso, entender como ele funciona ajudará
 * você a escrever um código mais eficiente e evitar surpresas indesejadas.
 */