/**
 * Em JavaScript, o tipo de dado boolean é usado para representar dois valores: true (verdadeiro) e
 * false (falso). Esses valores são usados principalmente em expressões condicionais e
 * operações de lógica para controlar o fluxo do programa. 
 * Aqui estão alguns exemplos de uso de valores booleanos:
 */

const isDiaEnsolarado = true;
const estaChovendo = false;

/**
 * Os valores booleanos são frequentemente usados em declarações condicionais, como
 * instruções if, para determinar qual bloco de código deve ser executado com base em uma condição:
 */

if (isDiaEnsolarado) {
    console.log("Vamos à praia!");
  } else {
    console.log("Vamos ficar em casa.");
  }

/**
 * Os valores booleanos também podem ser o resultado de expressões lógicas e operações de
 * comparação:
 */

const idade = 18;
const podeDirigir = idade >= 18; // true
const podeBeber = idade >= 21;   // false

console.log(idade);
console.log(podeDirigir);
console.log(podeBeber);

/**
 * Operadores de comparação como ==, ===, !=, !==, <, >, <= e >= também 
 * retornam valores booleanos quando comparando valores.
 */

// Operações Lógicas:

/**
 * Em JavaScript, você pode usar operadores lógicos para combinar valores booleanos e criar
 * expressões mais complexas:
 */

/**
 *  - && (E): Retorna true se ambos os valores forem true.
 *  - || (OU): Retorna true se pelo menos um dos valores for true.
 *  - ! (NÃO): Inverte o valor booleano (de true para false ou vice-versa).
 */

const temIdadeParaDirigir = idade >= 18;
const temCarteiraDeMotorista = true;

console.log(temIdadeParaDirigir);
console.log(temCarteiraDeMotorista);

const podeDirigirCarro = temIdadeParaDirigir && temCarteiraDeMotorista; // true
const podeAlugarCarro = temIdadeParaDirigir || temCarteiraDeMotorista;   // true
const naoPodeAlugarCarro = !podeAlugarCarro;                            // false

console.log(podeDirigirCarro);
console.log(podeAlugarCarro);
console.log(naoPodeAlugarCarro);

/**
 * Os valores booleanos são fundamentais para controlar o fluxo do programa e para a tomada
 * de decisões com base em condições. Eles são usados extensivamente em todas as 
 * linguagens de programação para permitir que os programas tomem decisões e se adaptem
 * a diferentes situações.
 */