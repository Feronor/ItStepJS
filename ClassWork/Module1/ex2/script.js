


// ex2

// let numberEx2 = + prompt('Enter number from 0 to 9')
// if (!(numberEx2 >= 0 && numberEx2 <= 9)) {
//   console.log('Incorrect symbol')
// }
// if (numberEx2 === 0) { alert(')') }
// if (numberEx2 === 1) { alert('!') }
// if (numberEx2 === 2) { alert('@') }
// if (numberEx2 === 3) { alert('#') }
// if (numberEx2 === 4) { alert('$') }
// if (numberEx2 === 5) { alert('%') }
// if (numberEx2 === 6) { alert('^') }
// if (numberEx2 === 7) { alert('&') }
// if (numberEx2 === 8) { alert('*') }
// if(numberEx2 === 9){ alert('(')}


// ex3

// let numEx3 = + prompt( 'Введите трехзначное число: ',  );
// let number1 = (parseInt(numEx3 /100));
// let number2 = (parseInt(numEx3 /10)) % 10;
// let number3 = (numEx3 % 10);
// if (number1 === number2 || number2 === number3 || number1 === number3) {
//   alert('Найдено співпадання цифр')
// } else {
//   alert('Співпадання ненайдено')
// }


// ex4

// let year = + prompt('Введіть рік')
// if(year%4==0 && year%100 !=0 || year%400==0) {
//   alert('Високосний')
// }else {
//   alert('не високосний')
// }


// ex5

// 35753
// let numBer = + prompt('Введіть п`ятирозрядне число')
// let number1 = (parseInt(numBer /10000));
// let number2 = (parseInt(numBer / 1000)) % 10;
// let number3 = (parseInt(numBer / 100)) % 10;
// let number4 = (parseInt(numBer /10)) % 10;
// let number5 = (numBer % 10);
// if ((number1 === number5 && number2 === number4 || 
//   number1 === number2 === number3 === number4 === number5 || number1 === number2 === number4 === number5) && numBer >= 10000 && numBer < 100000) {
//   alert('число палиндром' )
// } else if (!(numBer >= 10000 && numBer < 100000)) {
//   alert('Число не є п`ятирозрядним')
// } else {
//   alert('число не є палиндромом')
// }


// ex6

// const USD = 1
// const EUR = 0.7 * USD
// const UAN = 3 * USD
// const AZN = 33.7 * USD
// let qntUSD = + prompt('qnt USD')

// let convert = prompt('Convert to: EUR or UAN or AZN')
// switch (convert) {
//   case "EUR":
//     console.log((qntUSD * EUR) + " EUR");
//     break;
//   case "UAN":
//     console.log((qntUSD * UAN) + " UAN");
//     break;
//   case "AZN":
//     console.log((qntUSD * AZN) + " AZN");
//     break;
//   default:
//     console.log('Incorrect answer')
// }


// ex7

// let summaryPrice = + prompt('Введіть суму замовлення')
// if (summaryPrice > 0 && summaryPrice < 200) {
//   console.log(summaryPrice)
// }
// else if (summaryPrice >= 200 && summaryPrice < 300) {
//   console.log(summaryPrice * 0.97)
// } else if (summaryPrice >= 300 && summaryPrice < 500) {
//   console.log(summaryPrice * 0.95)
// } else if (summaryPrice >= 500) {
//   console.log(summaryPrice * 0.93)
// } else {
//   console.log('Incorrect answer')
// }


// ex8

// let cicleLength = + prompt('Enter cicle length')
// let squarePerimetr = + prompt('Enter square perimetr')
// const squareSide = squarePerimetr / 4
// const circleRadius = cicleLength / (2 * 3.14)
// if (squareSide >= (circleRadius * 2)) {
//   console.log('Коло вписується в квадрат')
// }else{console.log('Коло не вписується в квадрат')}


// ex9


// let question1 = prompt('Питання 1: var11, var12, var13 ')
// let question2 = prompt('Питання 2: var21, var22, var23 ')
// let question3 = prompt('Питання 3: var31, var32, var33 ')

// switch (question1) {
//   case 'var11':
//     question1 = 2;
//     break;
//   case 'var12':
//     question1 = 0;
//     break;
//   case 'var13':
//     question1 = 0;
//     break;
// }
// switch (question2) {
//   case 'var21':
//     question2 = 0;
//     break;
//   case 'var22':
//     question2 = 2;
//     break;
//   case 'var23':
//     question2 = 0;
//     break;
// }
// switch (question3) {
//   case 'var31':
//     question3 = 2;
//     break;
//   case 'var32':
//     question3 = 0;
//     break;
//   case 'var33':
//     question3 = 0;
//     break;
// }
// let total = question1 + question2 + question3
// console.log(total)



