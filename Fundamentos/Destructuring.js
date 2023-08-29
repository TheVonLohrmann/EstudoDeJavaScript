/**
 * O operador de destructuring é uma funcionalidade do JavaScript que permite extrair valores
 * de arrays ou objetos e atribuí-los a variáveis individuais. Isso pode tornar seu código mais
 * conciso e legível ao lidar com estruturas complexas de dados. O destructuring é suportado
 * tanto para arrays quanto para objetos.
 */

// Destructuring de Arrays:

/**
 * Você pode desestruturar um array para extrair seus valores em variáveis individuais.
 * A ordem dos valores importa. Aqui está um exemplo:
 */
const numeros = [1, 2, 3];

const [primeiro, segundo, terceiro] = numeros;

console.log(primeiro); // 1
console.log(segundo);  // 2
console.log(terceiro); // 3

// Destructuring de Objetos:

/**
 * Para objetos, a ordem não importa, pois você está acessando os valores por suas chaves.
 * Aqui está um exemplo:
 */
const pessoa = {
    nome: "Alice",
    idade: 30,
    profissao: "Engenheira"
};
  
const { nome, idade, profissao } = pessoa;
  
console.log(nome);      // "Alice"
console.log(idade);     // 30
console.log(profissao); // "Engenheira"

// Atribuição com Renomeação:

/**
 * Você pode atribuir valores a variáveis com nomes diferentes do que as chaves dos objetos 
 * ou posições dos arrays:
 */
  
  const { nome: nomeDaPessoa, idade: idadeDaPessoa } = pessoa;
  
  console.log(nomeDaPessoa);  // "Alice"
  console.log(idadeDaPessoa); // 30

// Valores Padrão:

/**
 * Você também pode fornecer valores padrão caso a chave não esteja presente no objeto ou a
 * posição não esteja definida no array:
 */
const [a, b, c] = [1, 2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // undefined

/**
 * O operador de destructuring é uma ferramenta poderosa para manipular arrays e objetos
 * em JavaScript, tornando o código mais conciso e claro. Ele é amplamente utilizado em ES6
 * (ECMAScript 2015) e versões posteriores da linguagem.
 */