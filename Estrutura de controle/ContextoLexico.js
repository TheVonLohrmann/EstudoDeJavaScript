/**
 * O termo "contexto léxico" (ou "escopo léxico") se refere ao escopo em que as variáveis e
 * funções em JavaScript são declaradas e como essas variáveis e funções podem ser
 * acessadas em diferentes partes do código. O contexto léxico é determinado pelo local onde
 * o código é escrito no programa, ou seja, pela estrutura física do código fonte.
 */

// Aqui estão alguns pontos-chave sobre o contexto léxico:

/**
 * 1- Escopo Aninhado:
 *    O JavaScript permite que você declare variáveis e funções dentro de outros blocos de código,
 *    como funções dentro de funções ou blocos dentro de blocos. Cada escopo aninhado tem 
 *    acesso ao contexto léxico de seus pais, mas não o contrário. Isso significa que as variáveis declaradas em
 *    escopos mais internos podem acessar variáveis declaradas em escopos externos, mas não o contrário.
 * 
 * 2- Closures:
 *    O contexto léxico é fundamental para entender as closures em JavaScript. As closures 
 *    são funções que mantêm uma referência ao seu contexto léxico original, mesmo quando
 *    são chamadas fora desse contexto. Isso permite que as closures acessem variáveis de escopos externos, 
 *    mesmo após o término da execução do código externo.
 * 
 * 3- Ordem de Escopo:
 *    O contexto léxico também determina a ordem de busca de variáveis. Quando você faz 
 *    referência a uma variável em um escopo, o interpretador JavaScript primeiro verifica se ela
 *    está definida nesse escopo. Se não estiver, ele sobe a cadeia de escopos 
 *    para encontrar a primeira ocorrência da variável.
 */

// Aqui está um exemplo de contexto léxico:
function exterior() {
    const mensagem = "Hello, ";
  
    function interior(nome) {
      console.log(mensagem + nome);
    }
  
    return interior;
  }
  
  const saudacao = exterior();
  saudacao("Alice"); // "Hello, Alice"

/**
 * Neste exemplo, a função 'interior' tem acesso ao contexto léxico de 'exterior', o que
 * permite que ela acesse a variável 'mensagem' declarada em exterior.
 */

/**
 * Entender o contexto léxico é fundamental para compreender o escopo de variáveis, closures
 * e como o JavaScript resolve referências a variáveis em seu código. Ele desempenha um 
 * papel crucial na estruturação do código JavaScript e na prevenção de conflitos de nomes de variáveis.
 */