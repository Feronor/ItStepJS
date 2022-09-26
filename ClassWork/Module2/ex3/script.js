// Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.

// let result
// let count = 2
// function table(num) {
//   while (count < 10) {
//     document.body.innerHTML+=`${num} * ${count} = ${num * count} <br> `
//     count++
//   }
  
// }
// table(num = +prompt('enter number'))

// Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.

let random = Math.floor(Math.random() * (5) + 1)
console.log(`its qnt of numbers ${random}`)
let max=0
function num() {
  let result = 0
  let res = 0
  let i = 1;
  while ( i <= random){
    result = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    console.log(result)
    i++
    if (result > res && max < result) {
      res = result
      max = result
    } else {
      res = result
    }
  }
  console.log(`its maxium number ${max}`)
}
num()

//  Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).
// function numbersEvenOdd(min, max, bool = true) {
//   let res = ``;
//   for (let i = min; min <= max; i++) {
//     if (i % 2 == 0 && bool == true) {
//       res+= `${i}  `
//     }
//     else if(i % 2 !== 0 && bool == false) {
//       res+= `${i}  `
//     }
//   }
//   return res
// }
// numbersEvenOdd(1, 10)
// console.log(res)

 
