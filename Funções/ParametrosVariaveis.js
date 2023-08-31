/**
 * Em JavaScript, você pode usar o objeto especial 'arguments' para criar funções com um 
 * número variável de parâmetros, ou seja, você pode passar um número indefinido de 
 * argumentos para a função. O objeto 'arguments' contém uma lista dos argumentos
 * passados para a função, permitindo que você acesse esses valores dinamicamente.
 */

/**
 * No entanto, é importante observar que o uso de 'arguments' pode ser menos claro e menos 
 * flexível do que usar parâmetros padrão ou usar o operador spread (...) para coletar
 * argumentos em uma matriz.
 */

// Exemplo de uso de 'arguments':
function somar() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }
  
  console.log(somar(2, 4, 6)); // 12
  console.log(somar(1, 2, 3, 4, 5)); // 15

/**
 * No exemplo acima, a função 'somar' não possui parâmetros definidos. Ela usa o objeto
 * 'arguments' para iterar através dos argumentos passados e somá-los.
 */

/**
 * Nota: 
 * Embora o uso de 'arguments' seja uma opção para criar funções com parâmetros
 * variáveis, é recomendável usar o operador spread ('...') para coletar argumentos em uma
 * matriz ou usar parâmetros padrão com valores predefinidos, pois isso torna o código mais
 * claro e mais fácil de entender.
 */