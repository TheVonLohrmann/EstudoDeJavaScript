{
// var e para cirar uma variavel
//variavel guarda uma informação.
// o = siguinifica que esta atribuindo um valor a variavel
// o var serve tanto para int quanto para char;
var nome = "caneta";
var quantidade = 10;
// var(variavel) identificador(nome da variavel); 
var preco = 6.4;
var imposto = 1.5;
var precofinal = preco + imposto; 

// cuidado que no javascript letras maiusculas e minusculas importam

console.log(nome);
console.log(quantidade); // ao colocar o nome da variavel dentro do console vc chama o valor dessa variavel 
console.log(preco);
console.log(imposto);
console.log(precofinal);

nome = "caneta bic"; // a variavel pode ser alterada

blabla = 123; // variaveis podem ser criadas assim tbm mas dessa forma pode ocasionar em alguns possives problemas
console.log(blabla);

console.log(nome);
//console.log(preco + imposto);
}
console.log("---------dados 2----------");// ele e tipo o printf do c.
{
    let preco1 = 19.90; // let tbm serve para criar variaveis
    let desconto = 0.4;
    let precocomdes = preco1 * (1 - desconto);

    console.log(precocomdes);

    let nome1 = "caderno "; // string né
    let categoria = "papelaria";
    console.log("produto" + nome + ", categoria" + categoria); // + seve tipo a , em c ( o + soma o texto com o que vier depois)
}
console.log("---------dados 3----------"); 
{
    let idade = 31;

    console.log(typeof 31); // typeof serve para indentificar o tipo do que foi declarado
    console.log(typeof idade); 

    let salario = 4.5;

    console.log(typeof salario);// no javascript ele nao diferencia int e float, para ele e tudo number

    let estachovendo = true;

    console.log(typeof estachovendo);// existe um tipo chamado boolean que serve para verdadeiro ou falso

    let categoria2 = "papelaria";

    console.log(typeof categoria2);// e existe o tipo string
    // ainda existem outros tipos.
}
console.log("---------dados 4----------"); 
{
    const a = 3; // const e uma variavel constante que não pode ser alterada.
    console.log(a);



}
