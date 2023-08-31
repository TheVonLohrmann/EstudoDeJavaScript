/**
 * Sim, em JavaScript, tanto os parâmetros quanto o retorno de uma função são opcionais. Isso
 * significa que você pode criar funções que não têm parâmetros de entrada ou que não
 * retornam nenhum valor.
 */

// Função sem Parâmetros:
function saudacao() {
    console.log("Olá, mundo!");
  }
  
  saudacao(); // "Olá, mundo!"

/**
 * Neste exemplo, a função 'saudacao' não recebe nenhum parâmetro. Ela simplesmente
 * imprime "Olá, mundo!" sempre que é chamada.
 */

// Função sem Retorno:
function cumprimentar(nome) {
    console.log("Olá, " + nome + "!");
  }
  
  cumprimentar("Alice"); // "Olá, Alice!"

/**
 * Neste exemplo, a função 'cumprimentar' tem um parâmetro 'nome', mas ela não retorna
 * nenhum valor explicitamente. Ela apenas imprime a saudação.
 */

/**
 * No entanto, quando você não especifica um valor de retorno usando a instrução 'return', a
 * função retorna automaticamente 'undefined'.
 */

function somar(a, b) {
    const resultado = a + b;
    // Não há "return", então a função retorna "undefined" por padrão
  }
  
  const resultado = somar(3, 5);
  console.log(resultado); // undefined

/**
 * Lembre-se de que, ao definir uma função, você pode escolher quais parâmetros deseja 
 * passar e se deseja ou não retornar um valor. As necessidades do seu código determinarão 
 * como suas funções serão projetadas.
 */