/**
 * Parâmetros padrão permitem que você defina valores predefinidos para os parâmetros de
 * uma função. Isso significa que se um valor não for passado como argumento ao chamar a
 * função, o valor padrão será usado. Essa é uma característica útil para criar funções 
 * mais flexíveis e robustas.
 */

// Aqui está como você pode definir parâmetros padrão em uma função:
function saudacao(nome = "Visitante") {
    console.log("Olá, " + nome + "!");
  }
  
  saudacao("Alice");     // "Olá, Alice!"
  saudacao();            // "Olá, Visitante!" (sem argumentos, usa o valor padrão)

/**
 * No exemplo acima, o parâmetro 'nome' tem um valor padrão de "Visitante". Isso 
 * significa que, se nenhum valor for passado ao chamar a função, ela usará o valor padrão.
 */

/**
 * Os parâmetros padrão podem ser usados para tornar as funções mais flexíveis e evitar erros
 * quando os valores não são passados corretamente. Você pode usar qualquer tipo de valor 
 * como padrão, seja um número, uma string, um objeto ou até mesmo uma expressão.
 */