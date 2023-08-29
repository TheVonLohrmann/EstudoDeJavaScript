/**
 * O tratamento de erros em JavaScript é uma técnica para lidar com situações em que
 * ocorrem erros ou exceções durante a execução do código. Isso ajuda a evitar que o
 * programa quebre e permite que você tome medidas apropriadas quando um erro ocorre.
 * A estrutura fundamental para o tratamento de erros é composta por três partes principais:
 * 'try', 'catch' e, opcionalmente, 'finally'.
 */

// 1. 'try' (Tentar):

/**
 * O bloco 'try' contém o código que você deseja monitorar em busca de exceções. Se
 * ocorrer algum erro dentro deste bloco, o fluxo de controle será desviado para o bloco 'catch'.
 */
try {
    // Código que pode gerar uma exceção
  } catch (erro) {
    // Tratamento do erro
  }

// 2. 'catch' (Capturar):

/**
 * O bloco 'catch' é executado quando uma exceção ocorre dentro do bloco try. Ele
 * recebe o objeto de erro como um parâmetro, permitindo que você acesse informações sobre o erro.
 */
try {
    // Código que pode gerar uma exceção
} catch (erro) {
    // Tratamento do erro
    console.error("Ocorreu um erro:", erro.message);
}

// 3. 'finally' (Finalmente, opcional):

/**
 * O bloco 'finally' é opcional e é executado independentemente de ocorrer uma exceção
 * ou não. Ele é frequentemente usado para liberar recursos ou executar ações finais que
 * devem ser realizadas, independentemente do resultado do bloco 'try'.
 */
try {
    // Código que pode gerar uma exceção
  } catch (erro) {
    // Tratamento do erro
  } finally {
    // Código a ser executado sempre
  }
  
// Lançando Exceções com 'throw': 

/**
 * Você também pode lançar exceções explicitamente usando a palavra-chave 'throw'. Isso é
 * útil quando você deseja sinalizar um erro personalizado.
 */
function dividir(a, b) {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }
  
  try {
    const resultado = dividir(10, 0);
    console.log(resultado);
  } catch (erro) {
    console.error("Ocorreu um erro:", erro.message);
  }

/**
 * O tratamento de erros com 'try', 'catch' e 'throw' é fundamental para escrever código 
 * robusto e lidar de forma adequada com possíveis situações de erro. Ele ajuda a evitar que o
 * programa pare de funcionar devido a exceções não tratadas e permite que você forneça
 * feedback útil ao usuário ou realize ações de recuperação apropriadas.
 */