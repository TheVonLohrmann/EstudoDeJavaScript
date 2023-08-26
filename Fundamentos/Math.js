/**
 * A biblioteca Math em JavaScript fornece uma ampla gama de funções matemáticas
 * embutidas para ajudar a realizar cálculos matemáticos complexos e precisos.
 * Aqui estão alguns exemplos de como usar algumas das funções disponíveis na biblioteca Math:
 */

// 1. Arredondamento e Trigonometria:
const numero = 3.7;

const arredondadoParaBaixo = Math.floor(numero); // 3
const arredondadoParaCima = Math.ceil(numero);   // 4
const arredondado = Math.round(numero);           // 4

console.log(arredondadoParaBaixo);
console.log(arredondadoParaCima);
console.log(arredondado);

const senoAngulo = Math.sin(Math.PI / 2);        // 1 (seno de 90 graus)
const cosAngulo = Math.cos(Math.PI);             // -1 (cosseno de 180 graus)

console.log(senoAngulo);
console.log(cosAngulo);

// 2. Raiz Quadrada e Potência:
const raizQuadrada = Math.sqrt(25); // 5
const potencia = Math.pow(2, 3);    // 8 (2 elevado a 3)

console.log(raizQuadrada);
console.log(potencia);

// 3. Valor Absoluto e Máximo/Mínimo:
const valorAbsoluto = Math.abs(-10);  // 10
const maiorNumero = Math.max(5, 10, 2); // 10
const menorNumero = Math.min(5, 10, 2); // 2

// 4. Números Aleatórios:
const numeroAleatorio = Math.random(); // Número aleatório entre 0 e 1

console.log(numeroAleatorio);

/**
 * Lembre-se de que Math.random() gera um número pseudoaleatório entre 0 (inclusive) e 1 (exclusivo).
 * Se você precisar de um número aleatório dentro de um intervalo específico, você pode combinar
 * Math.random() com outras operações matemáticas.
 */

// 5. Constantes Matemáticas:
const pi = Math.PI;         // Valor de Pi (3.141592653589793)
const euler = Math.E;       // Constante de Euler (2.718281828459045)
const log10e = Math.LN10;   // Logaritmo natural de 10 (2.302585092994046)

console.log(pi);
console.log(euler);
console.log(log10e);

/**
 * Esses são apenas alguns exemplos das muitas funções disponíveis na biblioteca Math.
 * Ao usar essas funções, você pode realizar cálculos matemáticos mais avançados com precisão
 * e confiabilidade. Certifique-se de consultar a documentação oficial para uma lista completa 
 * de funções e como usá-las: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */