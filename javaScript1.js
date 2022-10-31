

const a = 2;
const b = 3;

// == одно должно быть равное второму!
// === одно должно быть равно второму по типу тоже

// if (2 == '2') {
//     console.log(true)
// } else {
//     console.log(false)
// }


// if (a > 10) {
//     console.log('Incorect');
// }
//  else if (a == '2') {
//     console.log('Sunt egale');
//  }else{
//     console.log('Nui correct');
//  }

const c = 10;
const e = 20;

// && -- и первое и второе должно быть правдой( and)
// if (c === 10 && e === 20) {
//     console.log('Sunt egale');
// }else{
//     console.log('Nus Egale');
// }

// || --должно быть правильное одно из всех, выбирает первую правильную на остальные все равно!
// if (c > 19 || e > 10 || e==20 ){
//     console.log('Odna pravilinaia');
// } else{
//     console.log('Ni odin ne veren');
// }

// Switch - альтернатива if(меньше используется)
// let fruit = 'orange';

// switch (fruit) {
//     case 'orange':
//           console.log('orange $0.59');
//         break;
//         case 'apple':
//           console.log('apple $1.59');
//             break;
//         case 'banana':
//             console.log('Banana $2.59');
//             break;
//         default:
//             break;
// }


let i = 1;

// while - это функция  которая создает цикл определенный) повторяет ещеще пока не дойдет до true или false

// while (i => 5) --бессконечный цикл
// while (i <= 5) {
//     console.log(i);
//     i +=1;
// };


// не часто используется
// do {
//     console.log(i);
//     i +=1;
// } while(i <= 5);


// for (let index = 0; index < 5; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }


// МОЙ ПЕРВЫЙ КАЛЬКУЛЯТОР

// const first_number = prompt('First number');
// const operator = prompt('mathematical operator');
// const second_number = prompt('Second number');

// console.log( typeof first_number);
// Number()

// if (operator === "+"){
//     console.log(Number(first_number) + Number(second_number));
// }else if (operator === "-"){
//     console.log(Number(first_number) - Number(second_number));
// }
// else if (operator === "*"){
//     console.log(Number(first_number) * Number(second_number));
// }
// else if (operator === "/"){
//     console.log(Number(first_number) / Number(second_number));
// }
// else if (operator === "**"){
//     console.log(Number(first_number) ** Number(second_number));
// }


