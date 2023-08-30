/**
 * A estrutura 'if' é uma das estruturas condicionais mais básicas em JavaScript. Ela permite 
 * que você execute um bloco de código se uma determinada condição for verdadeira.
 * Aqui está a sintaxe geral da estrutura 'if':
 */

if (condicao) {
    // Código a ser executado se a condição for verdadeira
}

/**
 * Você também pode usar a estrutura 'if' em conjunto com 'else' e 'else if' para lidar
 * com diferentes cenários:
 */

// 1. Estrutura 'if' simples:

const idade1 = 20;

if (idade1 >= 18) {
  console.log("Pode entrar na festa.");
}

// 2. Estrutura'if'com'else':

const idade2 = 15;

if (idade2 >= 18) {
  console.log("Pode entrar na festa.");
} else {
  console.log("Não pode entrar na festa.");
}

// 3. Estrutura 'if' com 'else if':

const idade3 = 12;

if (idade3 >= 18) {
  console.log("Pode dirigir.");
} else if (idade3 >= 16) {
  console.log("Pode tirar a carteira de motorista.");
} else {
  console.log("Não pode dirigir.");
}

// 4. Estrutura 'if' aninhada:

const diaDaSemana = "sábado";
const estaChovendo = true;

if (diaDaSemana === "sábado") {
  if (estaChovendo) {
    console.log("Vou ficar em casa.");
  } else {
    console.log("Vou sair para aproveitar o dia.");
  }
} else {
  console.log("É um dia de semana, vou trabalhar.");
}

/**
 * A estrutura 'if' é uma ferramenta fundamental para a tomada de decisões em
 * programação. Ela permite que você execute diferentes partes do código com base em
 * condições específicas, tornando seus programas mais flexíveis e capazes de responder a
 * diferentes situações.
 */

  