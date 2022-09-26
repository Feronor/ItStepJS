
// ex3
// 3) Одиниці довжини пронумеровані в такий спосіб: 1 - дециметр, 2 - кілометр, 3 - метр, 4 - міліметр, 5 - сантиметр. Дано номер одиниці довжини (ціле число в діапазоні 1-5) і довжина відрізка в цих одиницях (дійсне число). Знайти довжину відрізка в метрах.

// let numberDistance = + prompt("enter num:\n1 - дециметр\n2 - кілометр\n3 - метр\n4 - міліметр\n5 -сантиметр")
// let distance = +prompt('Enter distance')
// let num
// if (numberDistance > 0 && numberDistance < 6 && distance >= 0) {
//   switch (numberDistance) {
//     case 1: num = distance / 10;alert(num);
//       break;
//     case 2: num = distance * 1000;alert(num);
//       break;
//     case 3: num = distance;alert(num);
//       break;
//     case 4: num = distance / 1000;alert(num);
//       break;
//     case 5: num = distance / 100;alert(num);
//       break;
//   }
// }else{console.log('incrorrect answer')}

// 7) Квиток на денний сеанс в кінотеатр коштує 30 грн., На вечірній - 60 грн. Сеанс і кількість квитків ввести з клавіатури. Вивести на екран вартість квитків, ввести суму грошей і вивести на екран здачу або повідомлення що грошей не вистачає.

// let total

// let seans = + prompt('enter num:\n1 - night\n2 - day')
// let qntTickets = + prompt('Enter qnt of tickets')
// if (seans === 1 && qntTickets >= 0) {
//   total = 60*qntTickets
// } else if (seans === 2 && qntTickets >= 0) {
//   total = 30*qntTickets
// }else{alert('incorrect answer')}
// alert(total)
// let bank = + prompt('enter your money balance')
// let cash
// if (bank >= total) {
//   cash = bank - total
//   alert(`Ваша здача ${cash} UAH`)
// } else if (bank < total) {
//   cash = total - bank
//   alert(`У вас невистачає грошей , вам потрібно додати ще ${cash} UAH  ;/`)
// }


// 9) Скласти програму, яка при введенні символу "{" або "}" виводить повідомлення "фігурна дужка", "[" або "]" - "квадратна дужка", "(" або ")" - кругла дужка. В інших випадках - "не дужка".

// let symbol = prompt('Введіть символ дужки')
// switch (symbol) {
//   case '{':
//   case '}': alert('Фігурна дужка');
//     break;
//   case '[':
//   case ']': alert('квадратна дужка');
//     break;
//   case '(':
//   case ')': alert('кругла дужка');
//     break;
//   default: alert('не дужка')
  
// }