// ex1
// let x = 0
// let count = + prompt('Enter count');
// while (x<count) {
//   console.log('#')
//   x++
// }

// 2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
// let num = +prompt('enter num')
// while (num >= 0) {
//   console.log(num)
//   num -= 1
// }

// Запросить число и степень. Возвести число в указанную степень и вывести результат.

// let num = +prompt('enter num')
// let stepin = +prompt('enter stepin')
// let result = num ** stepin
// console.log(result)

// 4. Предлагать пользователю решить пример 2 + 2 * 2 до тех пор,
// пока он не решит его правильно.
// let answer
// do {
//   answer = +prompt('2 + 2 * 2 = ?');
  
// } while (answer != 6)
// if (answer != 6) {
//     console.log('your are wrong')
//   }else{console.log('you are goddamn right')}

// 5. Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.

// let x = 1000
// let count = 0
// do {
//   x = x / 2
//   count++
// } while (x >= 50)
// console.log(`Вийшло число ${x} поділили ${count} раз`)

// 6. Вывести все числа от 1 до 100, которые кратные указанному
// пользователем числу.

// for (let x = 1; x <= 100; x++){
//   if (x % 7 === 0) {
//     console.log(x)
//   }
// }
// 7. Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.
// let max = +prompt('enter max')
// let min = +prompt('enter min')
// let x = min
// for (let count = 0; count <= max - min; count++){
//   if (count % 4 === 0 && count > 0) {
//     console.log(x)
//   }
//   x++
// }

