/**
 * Em JavaScript, a palavra-chave 'this' é usada para se referir ao objeto atual em que o 
 * código está sendo executado. No entanto, o valor de 'this' pode variar dependendo de 
 * como a função é chamada e onde ela é definida. Isso pode levar a comportamentos
 * confusos, especialmente em funções que são usadas em diferentes contextos.
 */

/**
 * A função 'bind' é um método disponível para funções em JavaScript, e é usado para criar 
 * uma nova função que tem um valor específico para o 'this', independentemente de como 
 * a nova função é chamada.
 */

// Exemplo:
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    descricao: function() {
      console.log("Este é um " + this.marca + " " + this.modelo);
    }
  };
  
  const funcaoDescricao = carro.descricao;
  funcaoDescricao(); // Isso resultará em "Este é um undefined undefined", porque o "this" não está mais ligado ao objeto "carro"
  
  const funcaoDescricaoBind = carro.descricao.bind(carro);
  funcaoDescricaoBind(); // Isso resultará em "Este é um Toyota Corolla", porque o "bind" fixou o "this" ao objeto "carro"

/**
 * No exemplo acima, 'funcaoDescricao' perdeu a ligação com o objeto carro, então 
 *  - 'this.marca' e 'this.modelo' tornaram-se 'undefined'. No entanto, 
 *  - 'funcaoDescricaoBind' foi criada usando 'bind' para fixar o valor de 'this' no objeto
 *  - 'carro', portanto, 'this.marca' e 'this.modelo' funcionam conforme esperado.
 */

/**
 * A função 'bind' é especialmente útil quando você deseja garantir que uma função seja
 * sempre chamada com um contexto específico para 'this', independentemente de onde ou
 * como ela é chamada. Isso é especialmente comum em casos de manipulação de eventos ou
 * passagem de funções como argumentos para outras funções.
 */