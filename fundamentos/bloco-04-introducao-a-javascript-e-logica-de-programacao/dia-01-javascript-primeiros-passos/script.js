//1

const a = 5;
const b = 8;

console.log("Soma:  "+ (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + (a * b));
console.log("Divisão: " + (a / b));
console.log("Módulo: " + (a % b));

//2

const c = 3;
const d = 1;

if (c > d){
    console.log(a);
}else if (a < b){
    console.log (b);
}

//3

const e = 5;
const f = 8;
const g = 3;

if (e > f && e > g){
    console.log(e);
}else if (f > g && f > e){
    console.log(f);
}else{
    console.log(g);
}

//4

const h = -1;

if (h > 0){
    console.log("positive");

}else if(h < 0) {
    console.log("negative");
}else{
    console.log("zero")
};

//5

let anguloA = 90;
let anguloB = 30;
let anguloC = 60;

let somaAngulo = anguloA + anguloB + anguloC;

let anguloPositivo = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(anguloPositivo){
  if (somaAngulo === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('O ângulo não é maior que 0');
}

//6

let peça = "uas";

switch (peça.toLowerCase()) {
    case "rei": console.log("Rei -> Uma casa para qualquer direção");
    break;
    case "bispo": console.log("Bispo -> Quantas casas quiser, no sentido diagonal");
    break;
    case "torre": console.log("Torre -> Horizontal e vertical");
    break;
    case "peão": console.log("Peão -> Uma casa para frente");
    break;
    case "cavalo": console.log("Cavalo -> movimento L e pula peças ");
    break;
    case "rainha": console.log("Rainha -> Sentido diagonal");
    break;
    default:
        console.log("Peça inválida");

};

//7

let media = 88;

if (media >= 90){
    console.log("A");

}else if (media >= 80){
    console.log("B");

}else if (media >= 70){
    console.log("C");

}else if (media >= 60){
    console.log("D");

}else if (media >= 50){
    console.log("E");

}else{
    console.log("F");
}

//8

const i = 3;
const j = 2;
const k = 9;

let numPar;

if ((i % 2 === 0 || j % 2 === 0 || k % 2 === 0)) {
  numPar = true;
}else {
    numPar = false;
};
console.log(numPar);

//9

const l = 4;
const m = 8;
const n = 2;

let numImpar;

if (l % 2 === 1 || m % 2 === 1 || n % 2 === 1){
  numImpar = true;
}else {
    numImpar = false;
};
console.log(numImpar);

//10 (correção)

const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};

//11 (Correção)

let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));



