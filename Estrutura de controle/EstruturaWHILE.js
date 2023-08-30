/**
 * A estrutura 'while' é uma das estruturas de controle de repetição em JavaScript.
 * Ela permite que você execute um bloco de código repetidamente enquanto uma condição
 * específica for verdadeira. O bloco de código será executado repetidamente até que a 
 * condição se torne falsa. Aqui está a sintaxe da estrutura 'while':
 */
while (condicao) {
    // Código a ser executado enquanto a condição for verdadeira
  }

// Exemplo:
let contador = 0;

while (contador < 5) {
  console.log("Contagem:", contador);
  contador++;
}

/**
 * Neste exemplo, o bloco de código dentro do 'while' será executado enquanto a variável
 * 'contador' for menor que 5. A cada iteração, o valor do 'contador' é incrementado em 1.
 */

/**
 * É importante ter cuidado ao usar a estrutura 'while', pois se a condição nunca se tornar
 * falsa ou se tornar falsa muito tarde, pode ocorrer um loop infinito, o que causará o 
 * congelamento do programa. Certifique-se sempre de que a condição eventualmente se
 * torne falsa para evitar isso.
 */

// Exemplo de uso prático:
let total = 0;
let numero;

while (true) {
  numero = parseInt(prompt("Digite um número (ou 0 para sair):"));
  
  if (numero === 0) {
    break; // Sai do loop se o número for 0
  }
  
  total += numero;
}

console.log("Total:", total);

/**
 * Neste exemplo, o programa solicita números ao usuário até que o número 0 seja digitado.
 * A estrutura 'while' é usada com uma condição sempre verdadeira ('true'),
 * e o loop é interrompido usando o comando 'break' quando o número 0 é inserido.
 */

/**
 * A estrutura 'while' é útil quando você deseja executar um bloco de código várias vezes
 * com base em uma condição dinâmica.
 */