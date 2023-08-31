/**
 * As instruções 'break' e 'continue' são utilizadas para controlar o fluxo de execução
 * dentro de loops ('for', 'while', 'do...while') em JavaScript. Elas permitem modificar o
 * comportamento padrão do loop, permitindo sair do loop prematuramente ('break') ou
 * pular uma iteração específica do loop ('continue').
 */

// 1. Instrução 'break':

/**
 * A instrução 'break' é utilizada para sair imediatamente de um loop quando uma 
 * determinada condição é atendida. Ela interrompe a execução do loop e continua a execução
 * do código após o loop.
 */

// Exemplo:

for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break; // Sai do loop quando i é igual a 3
    }
    console.log(i);
}

// Neste exemplo, o loop é interrompido quando 'i' é igual a 3, e a execução continuará fora do loop.

// 2. Instrução 'continue':

/**
 * A instrução 'continue' é utilizada para pular a iteração atual do loop e passar para a
 * próxima iteração. Ela permite que o loop continue executando com as próximas iterações,
 * ignorando o restante do código dentro do bloco de loop para a iteração atual.
 */

// Exemplo:

for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue; // Pula a iteração quando i é igual a 2
    }
    console.log(i);
}

/**
 * Neste exemplo, o loop continuará executando, mas quando 'i' for igual a 2, a iteração será
 * pulada e o número 2 não será impresso.
 */

/**
 * As instruções 'break' e 'continue' são úteis para controlar o fluxo de execução em loops
 * com base em determinadas condições. No entanto, é importante usá-las com moderação, 
 * pois um uso excessivo pode tornar o código mais difícil de entender e manter.
 */