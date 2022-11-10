import Client from './Client';
import Data from './Data';
import Order from './Order';
import OrderItem from './OrderItem';
import Student from './Student';

//ex: 1

const personOne = new Student('202001011', 'Maria da Silva');
  
console.log(personOne);

const personTwo = new Student('202001012', 'João da Silva');

console.log(personTwo);

//ex: 2

const personThree = new Student('202001011', 'Maria da Silva');

personOne.examsGrades = [25, 20, 23, 23];
personOne.worksGrades = [45, 45];

console.log(personThree);
console.log('Soma de todas as notas: ', personThree.sumGrades());
console.log('Média de todas as notas: ', personThree.sumAverageGrade());

//ex: 3-4

const client = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());

//ex: 5-6

const testDate = new Data(29, 1, 1989);
    
    console.log(testDate);
    console.log('Dia: ', testDate.day);
    console.log('Mês: ', testDate.month);
    console.log('Mês por extenso: ', testDate.getMonthName());
    console.log('Ano: ', testDate.year);
    console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
    console.log(testDate.format('dd/mm/aaaa'));
    console.log(testDate.format('dd-mm-aaaa'));
    console.log(testDate.format('aaaa/mm/dd'));
    console.log(testDate.format('aaaa-mm-dd'));
    console.log(testDate.format('dd de M de aa'));
    console.log(testDate.format('dd, M de aaaa'));
    
    const otherDate = new Data(30, 1, 2021);
    
    const compared = testDate.compare(otherDate);
    
    const compareStates = ['anterior', 'igual', 'posterior'];
    
    console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);
    
    // data inválida
    const invalidDate = new Data(31, 2, 2021);
    
    console.log('Teste data inválida: ', invalidDate);
    
    // formato inválido
    console.log(invalidDate.format('a m d'));


