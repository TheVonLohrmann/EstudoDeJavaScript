/** var, let e const são palavras-chave usadas para declarar variáveis em JavaScript. 
 * 
 * Cada uma delas tem suas próprias características e escopos.
 *  Aqui está um resumo básico de cada uma:
 */

/**
 * 1- Var:
 * 
 *  - var era a forma tradicional de declarar variáveis em JavaScript antes das versões mais recentes da linguagem.
 * 
 *  - Variáveis declaradas com var têm escopo de função ou escopo global, o que significa
 *    que elas são acessíveis dentro da função em que foram declaradas ou em todo o escopo global.
 * 
 *  - Variáveis declaradas com var são elevadas ("hoisted"), o que significa que podem ser referenciadas 
 *    antes da declaração real, mas terão um valor indefinido. 
 * 
 *  - var não possui o escopo de bloco, o que pode levar a problemas de vazamento de variáveis em alguns cenários.
 * 
 */

// Exemplo com var:

var nome1 = 'Alice'; //string
var numero = 3;// number
var verdadeiro = true; // booleano

console.log(nome1);
console.log(numero);
console.log(verdadeiro);

function exemploVar() { //function nesse caso serve como void
    if (true) {
      var nome = "Alice";
    }
    console.log(nome); // Saída: Alice
  }
  
  exemploVar();
  //console.log(nome); // Saída: Alice (variável vazada para o escopo global)
/**
 * Neste exemplo, a variável nome foi declarada com var dentro de um bloco if, mas ainda é acessível fora do bloco, causando vazamento de variável.
 */  



/**
 * 2- let
 * 
 *  - let foi introduzido no ES6 (ECMAScript 2015) para corrigir algumas limitações do var.
 * 
 *  - Variáveis declaradas com let têm escopo de bloco, o que significa que elas são 
 *    acessíveis apenas dentro do bloco em que foram declaradas.
 * 
 *  - let também é elevado, mas diferentemente do var, a variável não é inicializada até 
 *    que a declaração seja executada.
 * 
 *  - Devido ao escopo de bloco, let é preferível ao var para evitar vazamentos de 
 *    variáveis e problemas de escopo.
 * 
 */

// Exemplo com let:

let nome2 = 'pedro'; //string
let numero2 = 6;// number
let verdadeiro2 = false; // booleano

console.log(nome2);
console.log(numero2);
console.log(verdadeiro2);

function exemploLet() {//function nesse caso serve como void
    if (true) {
      let animal = "gato";
    }
    // console.log(animal); // Gera um erro, pois 'animal' está fora do escopo
  }
  
exemploLet();

/**
 * Neste exemplo, a variável animal foi declarada com let dentro do bloco if e não pode ser acessada fora desse bloco.
 */  

/**
 *  3- Const:
 * 
 *   - const também foi introduzido no ES6 e é usado para declarar constantes 
 *     (valores que não mudam após a atribuição inicial).
 * 
 *   - Variáveis declaradas com const também têm escopo de bloco.
 * 
 *   - Ao contrário de var e let, uma vez que uma variável é atribuída com const, 
 *     seu valor não pode ser alterado posteriormente.
 * 
 *   - É importante notar que, embora o valor da variável seja constante, 
 *     em caso de objetos ou arrays, as propriedades ou elementos internos podem ser modificados.
 * 
 */

// Exemplo com const:

const nome3 = 'lucas'; //string
const numero3 = 12;// number
const verdadeiro3 = true; // booleano

console.log(nome3);
console.log(numero3);
console.log(verdadeiro3);

function exemploConst() {//function nesse caso serve como void
    const PI = 3.14159;
    // PI = 3.14; // Gera um erro, pois você não pode reatribuir uma constante
    console.log(PI); // Saída: 3.14159
  }
  
exemploConst();

/**
 * Neste exemplo, a constante PI é declarada e não pode ser reatribuída após a primeira atribuição.
 */  

/**
 * Em geral, é uma boa prática usar const sempre que o valor da variável não precisar ser
 * reatribuído e usar let quando a reatribuição for necessária. Evite usar var na maioria
 * dos casos, já que let e const oferecem um controle de escopo mais preciso e têm 
 * comportamentos mais previsíveis.
 */