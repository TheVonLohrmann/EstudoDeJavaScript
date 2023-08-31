/**
 * A estrutura 'do/while' é uma variação da estrutura 'while'. Ela também é usada para criar
 * um loop que executa um bloco de código repetidamente enquanto uma condição for
 * verdadeira. A diferença fundamental entre 'do/while' e 'while' é que o bloco de código
 * no 'do/while' é sempre executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.
 */

// Aqui está a sintaxe da estrutura 'do/while':
do {
    // Código a ser executado
} while (condicao);

// Exemplo:

let contador = 0;

do {
  console.log("Contagem:", contador);
  contador++;
} while (contador < 5);

/**
 * Neste exemplo, o bloco de código dentro do 'do' será executado pelo menos uma vez, 
 * independentemente da condição. A condição 'contador < 5' é verificada após a primeira
 * execução. Se for verdadeira, o bloco será executado novamente.
 */

/**
 * A estrutura 'do/while' é útil quando você deseja garantir que um bloco de código seja 
 * executado pelo menos uma vez, mesmo que a condição seja inicialmente falsa.
 * Certifique-se de que a condição se torne falsa eventualmente para evitar loops infinitos.
 */