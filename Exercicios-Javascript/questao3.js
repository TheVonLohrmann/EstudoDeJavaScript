// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
console.log('|-----------------------------------------|');
function elevado(base, expoente){
    return Math.pow(base, expoente);
}

const numero = elevado(2, 3);
console.log(`| a base elevada ao expoente é ${numero}`);
console.log('|-----------------------------------------|');

function calcularPotencia(base1, expoente1) {
    return base1 ** expoente1;
}

const resultado = calcularPotencia(2, 3); 
console.log("| "+ resultado);
console.log('|-----------------------------------------|');