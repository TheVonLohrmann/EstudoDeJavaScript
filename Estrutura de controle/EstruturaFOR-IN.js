/**
 * A estrutura 'for...in' é usada para iterar sobre as propriedades de um objeto. Ela permite
 * percorrer todas as chaves (propriedades) enumeráveis de um objeto e executar um bloco de
 * código para cada propriedade. Aqui está a sintaxe da estrutura 'for...in':
 */
for (variavel in objeto) {
    // Código a ser executado para cada propriedade do objeto
}

// Exemplo:

const pessoa = {
    nome: "Alice",
    idade: 30,
    profissao: "Engenheira"
  };
  
  for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
}

/**
 * Neste exemplo, o loop 'for...in' itera sobre as propriedades do objeto 'pessoa'. Em cada
 * iteração, a variável 'propriedade' recebe o nome da propriedade atual e o valor
 * correspondente é acessado usando 'pessoa[propriedade]'.
 */

// Observações importantes:

/**
 * - A estrutura 'for...in' itera sobre todas as propriedades enumeráveis, incluindo aquelas
 *   herdadas por meio da cadeia de protótipos do objeto. Portanto, tome cuidado ao usá-la em
 *   objetos que possam ter propriedades herdadas indesejadas.
 * - Essa estrutura não garante a ordem das propriedades, especialmente em relação a 
 *   propriedades com nomes numéricos ou não-ASCII.
 */

/**
 * Devido a essas considerações, o 'for...in' é frequentemente substituído pelo 'for...of' 
 * ou pelos métodos de iteração mais modernos introduzidos com ES6, como
 * 'Object.keys()', 'Object.values()' e 'Object.entries()'. Esses métodos oferecem 
 * mais controle sobre as propriedades e não iteram pelas propriedades herdadas.
 */