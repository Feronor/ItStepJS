// 7. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

// let count = 1
// let question = confirm('Понеділок. Хотите увидеть следующий день?')
// while (question == true) {
//   if (count === 1) {
//      question = confirm('Вівторок. Хотите увидеть следующий день?')
//     count++
//   }
//   if (count === 2) {
//      question = confirm('Cереда. Хотите увидеть следующий день?')
//     count++
//   }
//   if (count === 3) {
//      question = confirm('Четвер. Хотите увидеть следующий день?')
//     count++
//   }
//   if (count === 4) {
//      question = confirm('П`ятниця. Хотите увидеть следующий день?')
//     count++
//   }
//   if (count === 5) {
//      question = confirm('Субота. Хотите увидеть следующий день?')
//     count++
//   }
//   if (count === 6) {
//      question = confirm('Неділя. Хотите увидеть следующий день?')
//     count++
//   }
//   if (count === 7) {
//      question = confirm('Понеділок. Хотите увидеть следующий день?')
//     count = 1
//   }
// }
// alert('thats all')

// 8. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

// 9. Ввести число S и цифрy К. Возвести в степень К вторую цифру заданного числа.
// let S = +prompt('enter num S')
// let newS = S
// let K = +prompt('enter num K')
// let count = 0
// while (newS > 0) {
//   newS = parseInt(newS / 10)
//   count++
// }
// // 123456
// let secondS = (parseInt(S / 10 ** (count - 2))) % 10
// console.log(secondS)
// let result = K ** secondS
// alert(result)

//10. Напишите программу, которая выводит все четырехзначные числа последовательности 1000 1003 1006 1009 1012 1015 ...
// let num = 1000

// while (num < 10000) {
//   if ( (num - 1000) % 3 == 0) {
//    console.log(num)
//  }
//   num++
  
// }