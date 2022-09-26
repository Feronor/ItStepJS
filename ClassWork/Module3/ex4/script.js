// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

// function priyom(a, b) {
//   let res
//   if (a < b) { res = -1 }
//   else if (a > b) { res = 1 }
//   else if (a === b) { res = 0 }
//   return res
// }
// a = +prompt('enter num')
// b = +prompt('enter num')
// let t = priyom(a, b)
// console.log(t)

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

// function showBigNum(a, b, c) {
//   let res = `${a}${b}${c}`
//   return res
// }
// let show = showBigNum(5, 8, 0)
// document.body.innerHTML+= show

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function space(a, b = false) {
//   let res
//   if (b == false) {
//     res = a**2
//   } else { res = a * b }
//   return res
// }
// let show = space(5)
// document.body.innerHTML+= show

// Создайте функцию checkPassword(x), которая вернет значение true, если в качестве аргумента в нее будет передан допустимый пароль (одно из значений «Step», «Web» или «JavaScript»). Иначе функция должна вернуть false.

// function checkPassword(x) {
//   let res
  
//   switch (x) {
//     case 'Step':
//     case 'Web':
//     case 'JavaSript': res = 'true';
//       break;
//     default: res = 'false';
//   }
//   return res
// }

// let result = checkPassword('Step')
// console.log(result)

// Создайте функцию определения знака числа sign(x), которая вернет значение –1, если аргумент «х» — отрицательное число, 1 — если положительное, 0 — если аргумент «х» равен нулю.

// function priyom(x) {
//   let res
//   if (x < 0) { res = -1 }
//   else if (x > 0) { res = 1 }
//   else if (0 === 0) { res = 0 }
//   return res
// }
// x = +prompt('enter num')

// let t = priyom(x)
// console.log(t)