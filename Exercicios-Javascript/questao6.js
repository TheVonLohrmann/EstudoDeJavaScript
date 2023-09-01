/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
 * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos.
 */
console.log('|-----------------------------------------|');

/**
 * 1- Juros Simples:
 *    Montante (S) = Capital Inicial (P) + (P * Taxa de Juros (r) * Tempo (t))
 */

function montantejurossimples(capital, taxajuros, tempo){
    const jurossimples = capital * taxajuros * tempo;
    return capital + jurossimples;
}

/**
 * 1- Juros Compostos:
 *    Montante (S) = Capital Inicial (P) * (1 + Taxa de Juros (r)) ^ Tempo (t)
 */

function montantejuroscompostos(capital, taxajuros, tempo){
    const montante = capital * Math.pow(1 + taxajuros, tempo);
    return montante;
}

const capitalinicial = 10000;
const taxadejuros = 0.05;
const tempodeaplicacao = 5;

const montantesimples = montantejurossimples(capitalinicial, taxadejuros, tempodeaplicacao);
const montantecomposto = montantejuroscompostos(capitalinicial, taxadejuros, tempodeaplicacao);

console.log(`| montante (juros simples): R$ ${montantesimples.toFixed(2)}`);
console.log(`| montante (juros compostos): R$ ${montantecomposto.toFixed(2)}`);
console.log('|-----------------------------------------|');