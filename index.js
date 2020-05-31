/**
 * @module Main main program
 */
const { Tree } = require('./objects/tree');
const readLine = require('readline-sync');

let invalidInput = true;
let keepRunning = true;

let size = readLine.question('Ola! Por favor, digite o tamanho da arvore a ser criada: ');
while(invalidInput) {

    try {
        if(parseInt(size) >= 0) {
            invalidInput = false;
        } else {
            size = readLine.question('Tamanho invalido. Por favor, digite um numero inteiro maior ou igual a zero: ');
        }
    } catch(err) {
        size = readLine.question('Tamanho invalido. Por favor, digite um numero inteiro maior ou igual a zero: ');
    }
}

let tree = new Tree();

for(let k = 0; k < size; k++) {
    tree.addValue( Math.ceil(Math.random() * 100) );
}

while(keepRunning) {
    option = readLine.question('\nDigite uma das opcoes:\n1 - Imprimir arvore inteira\n2 - Inserir vertice\n3 - Sair do programa\n');

    if(option == 3) {
        keepRunning = false;
    } else if (option == 2) {
        value = readLine.question('\nDigite o valor do novo vértice: ');
        tree.addValue(parseInt(value));
    } else if (option == 1) {
        console.log('\n\n');
        tree.printOrdered();
    }
}