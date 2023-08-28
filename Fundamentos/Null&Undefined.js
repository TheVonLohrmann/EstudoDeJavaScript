/**
 * Entender os conceitos de 'null' e 'undefined' é fundamental em JavaScript, pois eles são
 * usados para representar valores ausentes ou indefinidos. No entanto, eles têm significados
 * ligeiramente diferentes. Vamos explorar cada um deles:
 */

// 1. Undefined:
/**
 * O valor 'undefined' é atribuído a uma variável quando ela é declarada, mas não inicializada
 * com nenhum valor. Também é o valor retornado por funções que não têm uma instrução
 * 'return' explícita ou por propriedades de um objeto que não foram definidas.
 */

let variavelNaoDefinida;
console.log(variavelNaoDefinida); // undefined

function funcaoSemRetorno() {}
console.log(funcaoSemRetorno()); // undefined

const pessoa = {};
console.log(pessoa.nome); // undefined

// 2. Null:
/**
 * O valor null é usado para representar a ausência intencional de valor. Pode ser atribuído
 * a uma variável para indicar explicitamente que ela não tem valor ou para redefinir o valor de
 * uma variável.
 */

let variavelNula = null;
console.log(variavelNula); // null

// Diferenças entre Undefined e Null:

/**
 *  - 'undefined' é frequentemente atribuído por JavaScript quando não há valor atribuído a
 *    uma variável ou quando uma propriedade de objeto não está definida.
 *  - 'null' é usado para indicar explicitamente a ausência de valor e deve ser atribuído manualmente.
 */

// Comparação:

// Quando comparados, 'null' e 'undefined' são iguais em valor, mas diferentes em tipo:

console.log(null == undefined); // true
console.log(null === undefined); // false

// Melhores Práticas:

/**
 *  - Evite atribuir explicitamente 'undefined' a uma variável. Deixe o JavaScript definir
 *    automaticamente como 'undefined' quando apropriado.
 *  - Use 'null' quando você deseja indicar que uma variável ou propriedade não tem um valor.
 */

// Quando Usar:

/**
 *  - Use 'undefined' para indicar que algo não foi definido ou não tem valor.
 *  - Use 'null' para indicar explicitamente a ausência intencional de valor.
 */

/**
 * Entender a diferença entre 'null' e 'undefined' é importante para evitar erros e garantir 
 * que você esteja tratando corretamente os valores ausentes em seu código.
 */