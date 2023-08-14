const TERMINATE = 'stop';
const object = {};

let key;
let value;

do {
    key = prompt('Enter Object');
    value = prompt('Enter Quantity');

    if (+value == 1) {
        object[key] = value;
    } else if (+value > 1) {
        object[`${key}s`] = value;
    }
    console.log(key, value);

} while (key != TERMINATE && value != TERMINATE);

console.log(object);