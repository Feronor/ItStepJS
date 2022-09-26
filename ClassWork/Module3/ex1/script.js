// 3) Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом:
// 2. Функция принимает объект-прямоугольник и возвращает его ширину.
// 3. Функция принимает объект-прямоугольник и возвращает его площадь.
// 4. Функция принимает объект-прямоугольник и возвращает его периметр.
// 5. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.

// let rectangle ={
//   x1: -2,
//   y1: 4,
//   x2: 5,
//   y2: -2,
//   x3: -2,
//   y3: -2,
//   x4: 5,
//   y4: 4
// }

// function taskOne(objOne) {
//   let width = 0
//   let count1
//   let count2
//   let x4 = rectangle.x4
//   let x1 = rectangle.x1
//   if (x4 > 0) {
//     for (count1 = 0; x4 > 0; count1++) {
//       x4--
//     }
  
//   } else if (x4 < 0) {
//     for (count1 = 0; x4 < 0; count1++) {
//       x4++
//     }
//   }
  
//   if (x1 > 0) {
//     for (count2 = 0; x1 > 0; count2++) {
//       x1--
//     }
  
//     console.log(count1)
//   } else if (x1 < 0) {
//     for (count2 = 0; x1 < 0; count2++) {
//       x1++
//     }
//   }
//   objOne.width = count1 + count2
  
//   return count1 + count2
// }

// let resOne = taskOne(rectangle)
// // console.log(`Ширина прямокутника : ${resOne}`)


// function taskTwo(objOne) {
//   let count1
//   let count2
//   let height
//   let y2 = rectangle.y2
//   let y4 = rectangle.y4
//   if (y2 > 0) {
//     for (count1 = 0; y2 > 0; count1++) {
//       y2--
//     }
  
//   } else if (y2 < 0) {
//     for (count1 = 0; y2 < 0; count1++) {
//       y2++
//     }
//   }
//   // console.log(count1)
//   if (y4 > 0) {
//     for (count2 = 0; y4 > 0; count2++) {
//       y4--
//     }
  
    
//   } else if (y4 < 0) {
//     for (count2 = 0; y4 < 0; count2++) {
//       y4++
//     }
//   }
//   // console.log(count2)
//   objOne.height = count1 + count2
//   let area = objOne.height * objOne.width
//   objOne.area = area
//   return area
// }
//  let resTwo = taskTwo(rectangle)
// // console.log(`area прямокутника : ${resTwo}`)

// function taskThree(objOne) {
//   let perimeter = (objOne.height * 2) + (objOne.width * 2)
//   objOne.perimeter = perimeter
//   return perimeter
// }
// let retThree = taskThree(rectangle)

// function taskFour(obj) {
//   let res 
//   if (obj.x5 >= obj.x1 && obj.x5 <= obj.x4 && obj.y5 >= obj.y3 && obj.y5 <= obj.y1) {
//     res = 'точка знаходиться в прямокутнику'
//   } else { res = 'точка не знаходиться в прямокутнику' }
  
//   return res
// }
// rectangle.x5 = +prompt('x5');
// rectangle.y5 = +prompt('y5');
// let resFour = taskFour(rectangle)
// console.log(resFour)



// console.log(rectangle)




// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// const car = {
//   brand: 'Ferrari',
//   model: 'Daytona SP3',
//   year: 2022,
//   speed: 200,
// }

// function showCarFunction(obj) {
//   let res = ``
//   for (let property in obj) {
//     res += property+ `:` + ` ` + obj[property] + `\n`
//   }
//   return res
// }
// let result = showCarFunction(car)
// // console.log(result)

// function taskTwo(obj, distance) {
//   let timeInWay = distance / car.speed ;

// let timeInRest = (timeInWay%4 == 0)? (timeInWay/4 | 0) - 1: timeInWay/4| 0;

//   let timeTotal = distance / car.speed + timeInRest;
//   return timeTotal
// }
// let resTwo = taskTwo(car, +prompt('enter dist'))
// console.log(` Total time: ${resTwo}`)