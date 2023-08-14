const log = console.log;

// SuB Program-1 : Input

let name = prompt('Enter Product Name'); // 'Hermes';
let quantity = +prompt('Enter Quantity'); // 10;
let price = Number(prompt('Enter Price')); //500_000;
let discount = prompt('Enter Discount'); //0.1;

// Sub Program-2 : CreateObject

// const products = {
//     name: name, // name:'Hermes'
//     quantity: quantity, // quantity : 20
//     price: price, // price: 500_000
//     discount: discount, //discount : 0.1
// };

// เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ value สามารถยุบ Syntax (Property shorthand)

const products = {
    name,
    quantity,
    price,
    discount,
};

if (discount != 0) {
    products['discount2'] = discount2;
}
log(products);

// Sub Program-3 : Calculate Price

// price , quantity , discount => TotalPrice

// function CalcPrice(price, quantity, discount) {
//     let TotalPrice = price * quantity * (1 - discount);
//     // 100 * 10 (1-0.1) => 1000(0.9) => 900
//     return TotalPrice;
// }

// let result = CalcPrice(products.price, products.quantity, products.discount);
// log(result);

function CalcPrice(productsObj) {
    let price = productsObj.price;
    let quantity = productsObj.quantity;
    let discount = productsObj.discount ? productsObj.discount : 0;
    return price * quantity * (1 - discount);
}

let result = CalcPrice(products);
// let CalcPrice({name , quantity , price , discount,})

log(result);