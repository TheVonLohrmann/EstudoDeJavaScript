/**
 * A estrutura 'switch' é uma outra forma de estrutura condicional em JavaScript, que 
 * permite avaliar uma expressão em relação a vários casos possíveis e executar diferentes
 * blocos de código com base no valor dessa expressão. Ela é particularmente útil quando
 * você precisa comparar um valor a várias opções diferentes.
 */

// Aqui está a sintaxe geral da estrutura 'switch':
switch (expressao) {
    case valor1:
      // Código a ser executado se a expressão for igual a valor1
      break;
    case valor2:
      // Código a ser executado se a expressão for igual a valor2
      break;
    // Outros casos possíveis
    default:
      // Código a ser executado se nenhum dos casos acima for correspondido
  }

/**
 * Cada caso é comparado com o valor da expressão, e o bloco de código correspondente é executado.
 * O bloco 'break' é usado para sair do switch após um caso ter sido correspondido.
 * Se nenhum 'break' for encontrado, o código continuará a ser executado para os casos
 * subsequentes até que um 'break' seja encontrado ou até que o 'switch' seja concluído.
 */

// Exemplo:
const diaDaSemana = "quarta";

switch (diaDaSemana) {
  case "segunda":
    console.log("Dia de começar a semana.");
    break;
  case "quarta":
    console.log("Metade da semana.");
    break;
  case "sexta":
    console.log("Quase final de semana.");
    break;
  default:
    console.log("Dia comum.");
}

/**
 * Neste exemplo, o valor da variável diaDaSemana é comparado com os diferentes casos.
 * Como 'diaDaSemana' é "quarta", o bloco de código correspondente ao caso "quarta" será executado.
 */

/**
 * A estrutura 'switch' é uma alternativa à estrutura 'if...else if...else' quando você 
 * está comparando uma única variável ou expressão com várias opções diferentes.
 * Ela ajuda a organizar seu código de forma mais clara e concisa.
 */