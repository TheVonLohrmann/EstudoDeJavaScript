/**
 * Em JavaScript, o tipo de dado string é usado para representar sequências de caracteres,
 * como texto. Strings podem conter letras, números, símbolos e espaços. Aqui estão alguns
 * exemplos de como usar strings:
 */

const nome = "Alice";           // Uma string simples
const frase = "Olá, mundo!";    // Uma frase
const vazia = "";               // Uma string vazia
const comAspasSimples = 'Isso é uma string com aspas simples.';
const comBackticks = `Usando template literals com ${nome}.`; // Template Literals

console.log(nome);
console.log(frase);
console.log(vazia);
console.log(comAspasSimples);
console.log(comBackticks);

/**
 * As strings podem ser definidas usando aspas duplas " ", aspas simples ' ', ou 
 * backticks (`) para template literals.
 * 
 * Algumas operações comuns que você pode realizar com strings:
 */

// Concatenação:
const nomeCompleto = nome + " Johnson"; // "Alice Johnson"

console.log(nomeCompleto);

// Tamanho da String (Propriedade 'length'):
const tamanho = nome.length; // 5

console.log(tamanho);

// Acessar Caracteres (índice baseado em zero):
const primeiroCaracter = nome[0]; // "A"
const segundoCaracter = nome[1];  // "l"

console.log(primeiroCaracter);
console.log(segundoCaracter);

// Converter para Maiúsculas ou Minúsculas:
const maiusculas = nome.toUpperCase();   // "ALICE"
const minusculas = nome.toLowerCase();   // "alice"

console.log(maiusculas);
console.log(minusculas);

// .replace();Substituir Partes da String:
const textoOriginal = "Eu gosto de maçãs.";
const novoTexto = textoOriginal.replace("maçãs", "peras"); // "Eu gosto de peras."

console.log(textoOriginal);
console.log(novoTexto);

// Substring: extrai uma parte específica da string com base nos índices:
const frase2 = "JavaScript é poderoso";
const parte = frase2.substring(0, 10); // "JavaScript"

console.log(frase2);
console.log(parte);


// split(" "); Dividir em um Array de Substrings:
const frase3 = "Olá, como vai você?";
const palavras = frase3.split(" "); // ["Olá,", "como", "vai", "você?"]

console.log(frase3);
console.log(palavras);

// Trim: remove os espaços em branco no início e no final de uma string:
const texto = "   Olá, mundo!   ";
const textoSemEspacos = texto.trim(); // "Olá, mundo!"

console.log(texto);
console.log(textoSemEspacos);

// Index of: retorna o índice da primeira ocorrência de uma substring dentro da string:
const frase4 = "Este é um exemplo.";
const indice = frase4.indexOf("é"); // 5

console.log(frase4);
console.log(indice);

// charAt: retorna o caractere no índice especificado da string:
const texto2 = "Olá";
const primeiroCaractere = texto2.charAt(0); // "O"

console.log(texto2);
console.log(primeiroCaractere);

// startsWith e endsWith: verificam se uma string começa ou termina com uma determinada substring:
const texto3 = "Olá, mundo!";
const comecaComOla = texto3.startsWith("Olá");     // true
const terminaComMundo = texto3.endsWith("mundo!");  // true

console.log(texto3);
console.log(comecaComOla);
console.log(terminaComMundo);

//charAt vs Bracket Notation: Embora charAt() seja frequentemente usado para acessar caracteres individuais, você também pode usar a notação de colchetes []:
const texto4 = "Olá";
const primeiroCaractere2 = texto4[0]; // "O"

console.log(texto4);
console.log(primeiroCaractere2);

// charCodeAt: é usado para obter o valor do código Unicode do caractere em um determinado índice de uma string.
const texto5 = "ABC";
const codigoUnicodeA = texto5.charCodeAt(0); // 65
const codigoUnicodeB = texto5.charCodeAt(1); // 66
const codigoUnicodeC = texto5.charCodeAt(2); // 67

console.log(codigoUnicodeA);
console.log(codigoUnicodeB);
console.log(codigoUnicodeC);

// concat: é usado para concatenar (juntar) duas ou mais strings para criar uma nova string resultante da concatenação.
const string1 = "Olá, ";
const string2 = "mundo!";
const saudacao = string1.concat(string2); // "Olá, mundo!"

console.log(saudacao);

// Você também pode passar múltiplos argumentos para o método .concat():
const parte1 = "Isso é ";
const parte2 = "uma ";
const parte3 = "concatenação.";
const resultado = parte1.concat(parte2, parte3); // "Isso é uma concatenação."

console.log(resultado);

/**
 * Note que o método .concat() cria uma nova string sem modificar as strings originais. 
 * Isso é importante porque as strings são imutáveis em JavaScript.
 */