/**
 * Uma função factory, também conhecida como fábrica de objetos, é uma função que cria e 
 * retorna objetos em JavaScript. A ideia por trás de uma função factory é encapsular a lógica 
 * de criação de objetos, permitindo a criação de objetos com configurações personalizadas 
 * sem a necessidade de usar o operador 'new' como em construtores tradicionais.
 */

// Aqui está um exemplo básico de uma função factory:
function criarPessoa(nome, idade) {
    return {
      nome: nome,
      idade: idade,
      saudacao: function() {
        console.log("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos.");
      }
    };
  }
  
  const pessoa1 = criarPessoa("Alice", 30);
  const pessoa2 = criarPessoa("Bob", 25);
  
  pessoa1.saudacao(); // "Olá, meu nome é Alice e eu tenho 30 anos."
  pessoa2.saudacao(); // "Olá, meu nome é Bob e eu tenho 25 anos."

/**
 * Neste exemplo, 'criarPessoa' é uma função factory que aceita dois argumentos, 'nome' e 'idade',
 * e retorna um objeto com propriedades personalizadas. Cada objeto retornado possui
 * uma função 'saudacao' que pode ser chamada para imprimir uma saudação personalizada.
 */

/**
 * As funções factory são úteis quando você precisa criar vários objetos com uma estrutura 
 * semelhante, mas com valores diferentes. Elas ajudam a encapsular a lógica de criação de
 * objetos e tornam o código mais modular e fácil de manter.
 */

/**
 * As funções factory podem ser uma alternativa útil aos construtores tradicionais em casos
 * onde a criação de objetos é mais complexa ou personalizada. Elas também podem ser 
 * usadas em conjunto com herança prototipada para criar hierarquias de objetos.
 */