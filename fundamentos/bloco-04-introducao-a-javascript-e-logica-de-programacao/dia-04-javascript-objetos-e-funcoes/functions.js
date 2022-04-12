//1

//A
function verificaPalindrome(word) {
    for (index in word) {
        if (word[index] != word[(word.length - 1) - index]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindrome('arara'));

//B

function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('desenvolvimento'));

//2

function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
        if (numeros[indiceMaior] < numeros[indice]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

//3

function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
        if (numeros[indiceMenor] > numeros[indice]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

//4

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
        if (maiorPalavra.length < palavras[indice].length) {
            maiorPalavra = palavras[indice];
        }
    }
    return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5

//Duas formas de resolver o exercício
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
}

function maisRepetido(numeros) {
    let num = {};

    for (let index = 0; index < numeros.length; index += 1) {
        let valor = numeros[index];
        if (num[valor] === undefined) {
            num[valor] = 1;
        } else {
            num[valor] = num[valor] + 1;
        }
    }

    let contRepetido = 0;
    let contNumero = 0;

    for (let prop in num) {
        if (contRepetido < num[prop]) {
            contRepetido = num[prop];
            contNumero = prop;
        }
    }

    return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//6

function somaTodosNumeros(numeros) {
    let total = 0;
    for (let index = 1; index <= numeros; index += 1) {
        total = total + index;
    }
    return total;
}
console.log(somaTodosNumeros(5));

//7


//Duas formas de resolver o exercício
function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
        if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
            controle = false;
        }
    }
    return controle;
}

function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
    let result;

    for (let index = 0; index < inversoFimPalavra.length; index += 1) {
        if (inversoPalavra[index] !== inversoFimPalavra[index]) {
            result = false;
            break;
        } else {
            result = true;
        }
    }

    return result;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));










