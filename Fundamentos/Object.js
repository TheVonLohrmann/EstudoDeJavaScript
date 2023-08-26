/**
 * Em JavaScript, o tipo de dado object é uma estrutura de dados que permite armazenar e
 * organizar informações em pares chave-valor. Um objeto é uma coleção de propriedades, 
 * onde cada propriedade tem um nome (chave) e um valor associado. As propriedades 
 * podem conter qualquer tipo de dado, incluindo outros objetos. Aqui está como você pode
 * usar objetos em JavaScript:
 */

// Criar um Objeto:

// Você pode criar um objeto usando chaves {} e definindo suas propriedades:
const pessoa = {
    nome: "Alice",
    idade: 30,
    cidade: "São Paulo"
  };

// Acessar Propriedades:

/**
 * Você pode acessar as propriedades de um objeto usando a notação de ponto
 * objeto.propriedade ou a notação de colchetes objeto['propriedade']:
 */

console.log(pessoa.nome);   // "Alice"
console.log(pessoa['idade']); // 30

// Modificar Propriedades:

// Você pode modificar o valor de uma propriedade atribuindo um novo valor a ela:
pessoa.idade = 31;
pessoa.cidade = "Rio de Janeiro";

// Adicionar Propriedades:

// Você pode adicionar novas propriedades a um objeto a qualquer momento:
pessoa.profissao = "Engenheira";

// Remover Propriedades:

// Você pode remover uma propriedade de um objeto usando o operador delete:
delete pessoa.cidade;

// Objetos Aninhados:

// Os objetos podem conter propriedades que são objetos em si:
const livro = {
    titulo: "Aventuras de JavaScript",
    autor: {
      nome: "Alice",
      sobrenome: "Johnson"
    }
  };

// Iterar sobre Propriedades:

// Você pode iterar sobre as propriedades de um objeto usando um loop for...in:
for (const chave in pessoa) {
    console.log(chave, pessoa[chave]);
  }

// Object.keys(), Object.values() e Object.entries():

// Esses métodos são usados para obter um array das chaves, valores ou pares chave-valor de um objeto:
const chaves = Object.keys(pessoa);     // ['nome', 'idade', 'profissao']
const valores = Object.values(pessoa);   // ['Alice', 31, 'Engenheira']
const pares = Object.entries(pessoa);   // [['nome', 'Alice'], ['idade', 31], ['profissao', 'Engenheira']]

// Métodos de Objeto:
/**
 * Além de propriedades, os objetos também podem conter métodos, que são funções
 * associadas ao objeto. Esses métodos podem ser usados para executar ações relacionadas
 * ao objeto:
 */

const pessoa6 = {
    nome: "Alice",
    idade: 30,
    saudacao: function() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  };
  pessoa6.saudacao(); // "Olá, meu nome é Alice e eu tenho 30 anos."

// This Keyword:
/**
 * Dentro de um método de objeto, a palavra-chave this refere-se ao próprio objeto.
 * Ela é usada para acessar as propriedades do objeto dentro do método.
 */

// Object.assign():

/**
 * O método Object.assign() é usado para copiar o valor das propriedades de um ou mais
 * objetos em um objeto de destino:
 */
const destino = {};
const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };

Object.assign(destino, objeto1, objeto2); // destino se torna { a: 1, b: 3, c: 4 }

// Objetos Construtores:

/**
 * Você também pode criar objetos usando funções construtoras, que atuam como moldes
 * para criar novos objetos com propriedades e métodos predefinidos:
 */
function pessoa1(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.saudacao = function() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    };
  }
  
  const pessoa1 = new pessoa1("Alice", 30);
  const pessoa2 = new pessoa1("Bob", 25);

// Classes (Introduzidas no ES6):

// Classes são uma forma mais moderna de definir objetos construtores em JavaScript:
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    saudacao() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  }
  
  const pessoa3 = new Pessoa("camila", 30);
  const pessoa4 = new Pessoa("lucas", 25);

/**
 * Esses são apenas alguns aspectos dos objetos em JavaScript. Objetos são uma parte
 * fundamental da linguagem e permitem que você modele e organize dados de maneira
 * eficiente e orientada a objetos. À medida que você se aprofunda na programação
 * JavaScript, você descobrirá muitos outros recursos e padrões relacionados a objetos.
 */
