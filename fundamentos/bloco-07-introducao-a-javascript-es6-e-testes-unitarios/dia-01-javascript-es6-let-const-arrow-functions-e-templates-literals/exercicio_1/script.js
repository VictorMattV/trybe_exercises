//1

const scope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ` ${ifScope} ótimo, fui utilizada no escopo ! `;
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}
scope(true);

//2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const numbersOrdered = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
}

const newArray = numbersOrdered();


console.log(`Os números ${newArray} se encontram ordenados de forma crescente !`);