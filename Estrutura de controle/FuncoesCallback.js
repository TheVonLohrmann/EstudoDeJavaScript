/**
 * Uma função de callback (ou simplesmente callback) é uma função que é passada como
 * argumento para outra função e é executada após a conclusão de uma operação assíncrona
 * ou em resposta a algum evento. Em JavaScript, as funções de callback são uma parte
 * fundamental da programação assíncrona, permitindo que você controle o fluxo do código
 * em situações em que o tempo de execução é desconhecido.
 */

// Aqui está um exemplo de como usar uma função de callback:
function fazerAlgumaCoisa(parametro, callback) {
    console.log("Fazendo alguma coisa com " + parametro);
    // Simula uma operação assíncrona, como uma requisição HTTP ou um temporizador
    setTimeout(function() {
      callback("Operação concluída"); // Chama o callback após a conclusão da operação
    }, 2000);
  }
  
  function callbackFunction(resultado) {
    console.log("Callback recebeu: " + resultado);
  }
  
  fazerAlgumaCoisa("dados", callbackFunction);

// Neste exemplo:

/**
 * 1- 'fazerAlgumaCoisa' é uma função que aceita dois argumentos: um 'parametro' e um 'callback'.
 * 
 * 2- Ela faz alguma operação e, em seguida, chama o 'callback' após a conclusão da operação.
 * 
 * 3- 'callbackFunction' é a função de callback que será executada quando 'fazerAlgumaCoisa' chamar o callback.
 * 
 * 4- 'fazerAlgumaCoisa'("dados", callbackFunction) chama 'fazerAlgumaCoisa' com um parâmetro e uma função de callback.
 *    Quando a operação assíncrona dentro de 'fazerAlgumaCoisa' estiver concluída, a função 'callbackFunction'
 *    será executada com o resultado.
 */

/**
 * Callbacks são amplamente usados em JavaScript, especialmente em situações assíncronas,
 * como manipulação de eventos, requisições AJAX, timers e muito mais. Eles permitem que
 * você lide com tarefas assíncronas de maneira controlada e flexível, garantindo que o código
 * seja executado na ordem desejada.
 */

// Funções Callback browser

/**
 * Em um ambiente de navegador da web, as funções de callback são comumente usadas para
 * lidar com operações assíncronas, como manipulação de eventos do usuário, solicitações de
 * AJAX, animações e outras tarefas que não podem ser executadas imediatamente.
 */

// Aqui estão alguns exemplos de como as funções de callback são usadas em um contexto de navegador:

//1-Evento de Clique (Click Event):
const botao = document.querySelector('#meuBotao');

function cliqueCallback() {
  console.log('Botão foi clicado!');
}

botao.addEventListener('click', cliqueCallback);

/**
 * Neste exemplo, quando o elemento do botão é clicado, a função 'cliqueCallback'
 * é chamada como um callback para o evento de clique.
 */

//2-Requisição AJAX:
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.example.com/data', true);

xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log('Dados recebidos:', data);
  } else {
    console.error('Erro na requisição:', xhr.status);
  }
};

xhr.send();

/**
 * Aqui, uma função anônima é atribuída à propriedade 'onload' do objeto XMLHttpRequest
 * como um callback. Ela é chamada quando a resposta da requisição AJAX é recebida.
 */

//3-Temporizador (Timer):
function acaoAposTempo() {
    console.log('Passou 2 segundos!');
  }
  
setTimeout(acaoAposTempo, 2000);
  
/**
 * Neste caso, a função 'acaoAposTempo' é passada como um callback para 'setTimeout',
 * e ela é chamada após um atraso de 2 segundos.
 */

/**
 * Esses são apenas alguns exemplos de como as funções de callback são usadas no
 * navegador. Em essência, as funções de callback permitem que você especifique um
 * comportamento personalizado que será executado quando um evento ou operação
 * assíncrona for concluído, tornando a interação com o DOM, serviços da web e outras partes
 * do ambiente do navegador mais flexível e poderosa.
 */