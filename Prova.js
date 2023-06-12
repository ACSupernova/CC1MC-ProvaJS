/*
Questão 01:  Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.
*/

function Primos(limit) {
    var Primo = [];

    for (var number = 2; number <= limit; number++) {
        var eprimo = true;

        for (var divisor = 2; divisor < number; divisor++) {
            if (number % divisor === 0) {
                eprimo = false;
                break;
            }
        }

        if (eprimo) {
            Primo.push(number);
        }
    }

    return Primo;
}

var NumPrimo = Primos(1000);
console.log(NumPrimo);

/*
Questão 02: Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.
*/

var SenhaBraba = prompt("Crie a sua senha brabíssima 100% anti-hacker");

if (SenhaBraba.length < 8) {
    alert("Senha inválida! Sua senha precisa ter NO MÍNIMO 8 caracteres!");
} else if (!/[A-Z]/.test(SenhaBraba)) {
    alert("Senha inválida! Sua senha precisa ter NO MÍNIMO uma letra maiúscula!");
} else if (!/\d/.test(SenhaBraba)) {
    alert("Senha inválida! Sua senha precisa ter NO MÍNIMO um número!");
} else {
    alert("Sua senha é braba! Está salva em nome de Jesus!");
}

/*
Questão 03: Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.
*/

var numero = 1;
var resultado = 1;
for (var i = numero; i >= 1; i--) {
    resultado *= i;
}
console.log("A fatorial de", numero, "é:", resultado);


var numero = 2;
var resultado = 1;
for (var i = numero; i >= 1; i--) {
    resultado *= i;
}
console.log("A fatorial de", numero, "é:", resultado);


var numero = 3;
var resultado = 1;
for (var i = numero; i >= 1; i--) {
    resultado *= i;
}
console.log("A fatorial de", numero, "é:", resultado);


var numero = 4;
var resultado = 1;
for (var i = numero; i >= 1; i--) {
    resultado *= i;
}
console.log("A fatorial de", numero, "é:", resultado);


var numero = 5;
var resultado = 1;
for (var i = numero; i >= 1; i--) {
    resultado *= i;
}
console.log("A fatorial de", numero, "é:", resultado);


var numero = 6;
var resultado = 1;
for (var i = numero; i >= 1; i--) {
    resultado *= i;
}
console.log("A fatorial de", numero, "é:", resultado);


var numero = 7;
var resultado = 1;
for (var i = numero; i >= 1; i--) {
    resultado *= i;
}
console.log("A fatorial de", numero, "é:", resultado);

var numero = 8;
var resultado = 1;
for (var i = numero; i >= 1; i--) {
    resultado *= i;
}
console.log("A fatorial de", numero, "é:", resultado);


var numero = 9;
var resultado = 1;
for (var i = numero; i >= 1; i--) {
    resultado *= i;
}
console.log("A fatorial de", numero, "é:", resultado);


var numero = 10;
var resultado = 1;
for (var i = numero; i >= 1; i--) {
    resultado *= i;
}
console.log("A fatorial de", numero, "é:", resultado);

/*
Questão 04: Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.
*/

function RaizQuadradaCheck() {
    var number = prompt("Digite um número inteiro:");

    var RaizQuadrada = Math.sqrt(parseInt(number));

    if (isNaN(RaizQuadrada)) {
        console.log("Invalid input. Please enter an integer number.");
        return;
    }

    if (Math.floor(RaizQuadrada) === RaizQuadrada) {
        console.log("A raiz quadrada de:", number, "é", RaizQuadrada, ". Parabéns, é um quadrado perfeito!");
    } else {
        console.log("The square root of", number, "is", RaizQuadrada, ". Errou feio! Errou rude! Não é um quadrado perfeito!");
    }
}
RaizQuadradaCheck();

