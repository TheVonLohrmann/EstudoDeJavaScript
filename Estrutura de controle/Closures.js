/**
 * Closures (ou fechamentos) são um conceito fundamental em JavaScript. Uma closure é a 
 * combinação de uma função e o ambiente léxico dentro da qual essa função foi declarada. 
 * Isso permite que a função preserve o acesso às variáveis ​​e parâmetros da função externa, 
 * mesmo após a função externa ter concluído sua execução.
 */

/**
 * Em termos simples, uma closure é uma função que "lembra" das variáveis em seu escopo 
 * léxico (o escopo em que a função foi criada) e pode acessá-las, mesmo que essa função seja 
 * executada em um escopo diferente.
 */

// Aqui está um exemplo básico de closure:
function exterior() {
    const mensagem = "Hello, ";
    
    function interior(nome) {
      console.log(mensagem + nome);
    }
    
    return interior;
  }
  
  const saudacao = exterior();
  saudacao("Alice"); // "Hello, Alice"

// Neste exemplo:

/**
 * - 'exterior' é uma função que declara uma variável 'mensagem' e define outra função chamada 'interior'.
 * 
 * - 'interior' é uma função aninhada dentro de 'exterior' que pode acessar a variável 'mensagem' de seu escopo pai, 'exterior'.
 * 
 * - Quando 'exterior' é chamada, ela retorna a função 'interior'. A variável 'saudacao' agora contém
 *   uma closure que inclui a referência ao ambiente léxico de 'exterior', incluindo a variável 'mensagem'.
 * 
 * - Quando chamamos 'saudacao("Alice")', a função 'interior' é executada, e ela ainda tem acesso à variável 
 *   'mensagem' do escopo de 'exterior', mesmo que 'exterior' já tenha concluído sua execução.
 */

/**
 * Closures são usadas em JavaScript para implementar vários padrões de design, como módulos,
 * encapsulamento de dados privados e gerenciamento de estado em funções assíncronas. 
 * Entender como as closures funcionam é fundamental para se tornar um desenvolvedor JavaScript eficaz.
 */