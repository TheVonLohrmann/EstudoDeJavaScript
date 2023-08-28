/**
 * A notação ponto é uma sintaxe em JavaScript que permite acessar propriedades e métodos
 * de objetos. Ela é usada para interagir com objetos e manipular seus valores e comportamentos.
 * A notação ponto é escrita da seguinte forma: 'objeto.propriedade' ou 'objeto.metodo()'.
 */

// Acessar Propriedades:

// Você pode usar a notação ponto para acessar as propriedades de um objeto:
const pessoa = {
    nome: "Alice",
    idade: 30,
    profissao: "Engenheira"
  };
  
  console.log(pessoa.nome);      // "Alice"
  console.log(pessoa.idade);     // 30
  console.log(pessoa.profissao); // "Engenheira"

// Chamar Métodos:

// A notação ponto também é usada para chamar métodos de um objeto:
const calculadora = {
    somar: function(a, b) {
      return a + b;
    },
    subtrair: function(a, b) {
      return a - b;
    }
  };
  
  console.log(calculadora.somar(3, 5));    // 8
  console.log(calculadora.subtrair(8, 3)); // 5

// Modificar Propriedades:

// Você pode usar a notação ponto para modificar o valor de uma propriedade de um objeto:
pessoa.idade = 31;
console.log(pessoa.idade); // 31

// Adicionar Propriedades:

// Você também pode usar a notação ponto para adicionar novas propriedades a um objeto:
pessoa.cidade = "São Paulo";
console.log(pessoa.cidade); // "São Paulo"

// Deletar Propriedades:

// Para remover uma propriedade de um objeto, você pode usar o operador 'delete' com a notação ponto:
delete pessoa.profissao;
console.log(pessoa.profissao); // undefined

/**
 * A notação ponto é uma parte fundamental da manipulação de objetos em JavaScript. Ela
 * permite que você acesse propriedades e métodos de objetos de forma clara e direta, 
 * tornando seu código mais legível e eficiente.
 */