/**
 * As funções construtoras em JavaScript são funções que são usadas para criar e inicializar
 * objetos. Elas são uma maneira de definir um tipo de objeto personalizado com propriedades 
 * e métodos específicos. Para criar uma função construtora, você usa a palavra-chave
 * 'function' seguida do nome da função com a convenção de começar com uma letra
 * maiúscula (por convenção). Aqui está a estrutura básica de uma função construtora: 
 */
function NomeDoObjeto(parametro1, parametro2) {
    this.propriedade1 = parametro1;
    this.propriedade2 = parametro2;
    this.metodo = function() {
      // Código do método
    };
  }

/**
 * -'NomeDoObjeto': 
 *  É o nome da função construtora. Por convenção, inicia-se com uma letra maiúscula.
 * 
 * -'parametro1', 'parametro2': 
 *  São os parâmetros que você pode passar para a função construtora para inicializar as propriedades do objeto.
 * 
 * -'this': 
 *  É uma referência ao objeto que está sendo criado e permite atribuir valores às propriedades do objeto.
 */

// Aqui está um exemplo de como usar uma função construtora para criar objetos:
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  const pessoa1 = new Pessoa("Alice", 30);
  const pessoa2 = new Pessoa("Bob", 25);
  
  console.log(pessoa1); // { nome: 'Alice', idade: 30 }
  console.log(pessoa2); // { nome: 'Bob', idade: 25 }

/**
 * No exemplo acima, 'Pessoa' é uma função construtora que cria objetos 'pessoa' com 
 * propriedades 'nome' e 'idade'. O operador 'new' é usado para criar novas instâncias da função construtora. 
 */

/**
 * Funções construtoras são comumente usadas em JavaScript para criar objetos que
 * compartilham as mesmas propriedades e métodos, como modelos de objetos. 
 * Elas oferecem uma maneira eficaz de criar instâncias de objetos personalizados.
 */