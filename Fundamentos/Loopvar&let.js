/**
 * Tanto 'var' quanto 'let' são palavras-chave usadas para declarar variáveis em JavaScript.
 * No entanto, eles têm diferenças significativas em relação ao escopo e comportamento
 * quando usados em loops. Vamos entender essas diferenças:
 */

// Var:

/**
 *  - Variáveis declaradas com 'var' têm escopo de função ou escopo global, mas não têm escopo de bloco.
 * 
 *  - Dentro de um loop (por exemplo, um 'for'), a variável declarada com 'var' não é limitada
 *    ao bloco do loop, mas tem escopo de função, o que pode levar a comportamentos 
 *    inesperados.
 */

// Exemplo com 'var':

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i); // Será 3 para todas as iterações
    }, 100);
}

/**
 * Nesse exemplo, a saída será '3' para todas as iterações, porque a variável 'i' mantém seu 
 * valor após o término do loop.
 */

// Let:

/**
 *  - Variáveis declaradas com 'let' têm escopo de bloco, o que significa que elas estão 
 *    restritas ao bloco onde foram declaradas.
 * 
 *  - Dentro de um loop, a variável declarada com 'let' mantém seu valor em cada iteração.
 */

// Exemplo com 'let':

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i); // Será 0, 1 e 2 para cada iteração
    }, 100);
  }

/**
 * Nesse exemplo, a saída será '0', '1' e '2' para cada iteração, pois a variável 'i' mantém 
 * seu valor em cada bloco de iteração do loop.
 */

/**
 * Em resumo, ao usar 'let' em um loop, você evita o comportamento confuso que 'var'
 * pode causar devido ao seu escopo de função. Geralmente, é recomendável usar 'let' para
 * declarações de variáveis dentro de loops para garantir um comportamento mais previsível e coerente.
 */