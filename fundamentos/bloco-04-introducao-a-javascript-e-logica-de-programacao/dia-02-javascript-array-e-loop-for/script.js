//1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i+= 1){
    console.log(numbers[i]);
};

//2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let i = 0; i < numbers.length; i+= 1){
    result += numbers[i];  
};

console.log(result);

//3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for(let i = 0; i < numbers.length; i+= 1){
    result += numbers[i] / 10;

}

console.log(result);

//3 (Correção)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);

//4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

if (average > 20){
    console.log("Valor maior que 20");
}else {
    console.log("Valor menor ou igual a 20");
};

//5 (Correção)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);

//6 (Correção)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
};

//7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

for (let i = 0; i < numbers.length; i+= 1){
    if (numbers[0] < menorValor){
        numbers[i] = menorValor;
    }
}
console.log(menorValor);

//8

let novo = [];

for (let i = 1; i <= 25; i+= 1){
    novo.push(i);
}

console.log(novo);

//9

let novo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (let i = 0; i < novo.length; i += 1) {
    console.log(novo[i] / 2);
  };
  










