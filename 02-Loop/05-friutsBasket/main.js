// //init
// const fruits = {};
// //Accept Input
// let key = prompt('Enter fruits');
// let value = +prompt('Enter Quantity');

// //Update Fruits
// //fruits.key = value // {key : 10}
// //fruits['apple'] = value ; //{apple : 10}
// //fruits[key] = value;

// if (value == 1) {
//     fruits[key] = value;
// } else if (value > 1) {
//     fruits[`${key}s`] = value;
// }

// fruits[key] = value;
// console.log(fruits);


const TERMINATE = 'stop';
const fruits = {};

let key;
let value;

do {
    key = prompt('Enter fruits');
    value = prompt('Enter Quantity');

    if (+value == 1) {
        fruits[key] = value;
    } else if (+value > 1) {
        fruits[`${key}s`] = value;
    }
    console.log(key, value);

} while (key != TERMINATE && value != TERMINATE);

console.log(fruits);
