/**
 * Funções são uma parte fundamental do JavaScript e desempenham um papel crucial na
 * organização e reutilização de código. Elas permitem agrupar um conjunto de instruções em
 * um bloco nomeado que pode ser chamado e executado em diferentes partes do seu
 * programa. Aqui estão os conceitos básicos das funções em JavaScript:
 */

// Definindo uma Função:

/**
 * Você pode definir uma função usando a palavra-chave 'function', seguida pelo nome da
 * função, parênteses para os parâmetros e chaves para o bloco de código:
 */

function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

// Chamando uma Função:

/**
 * Para executar o código dentro de uma função, você precisa chamá-la usando seu nome, 
 * seguido de parênteses e argumentos, se houver:
 */

saudacao("Alice"); // "Olá, Alice!"

// Parâmetros e Argumentos:

/**
 * A palavra-chave 'return' é usada para especificar o valor que a função deve retornar. Se
 * uma função não tiver uma instrução 'return', ela retornará automaticamente 'undefined'.
 */

function multiplicar(a, b) {
    return a * b;
}
  
const produto = multiplicar(4, 6); // 24

// Funções Anônimas e Expressões de Funções:

/**
 * Você também pode criar funções anônimas (sem nome) e atribuí-las a variáveis ou usar
 * expressões de funções:
 */

const quadrado = function(x) {
    return x * x;
};
  
const cubo = (x) => {
    return x * x * x;
};

// Escopo de Funções:

/**
 * As variáveis declaradas dentro de uma função têm escopo local, o que significa que elas não 
 * são acessíveis fora dessa função:
 */

function exemploEscopo() {
    const local = "variável local";
    console.log(local);
}
  
exemploEscopo(); // "variável local"
//console.log(local); // Erro: local is not defined

// Funções também podem acessar variáveis definidas no escopo global.

// Callbacks e Funções de Ordem Superior:

/**
 * Em JavaScript, funções também podem ser passadas como argumentos para outras
 * funções, ou retornadas por outras funções. Isso é muito útil para criar padrões como
 * callbacks e funções de ordem superior.
 */

function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}
  
const soma = (x, y) => x + y;
const subtracao = (x, y) => x - y;
  
console.log(executarOperacao(5, 3, soma)); // 8
console.log(executarOperacao(5, 3, subtracao)); // 2
  
/**
 * Funções são uma parte essencial da programação em JavaScript e permitem que você 
 * escreva código modular, reutilizável e mais legível. Elas são usadas em várias situações, 
 * desde tarefas simples até construção de funcionalidades complexas.
 */