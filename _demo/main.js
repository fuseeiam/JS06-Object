console.log('learn object');

// DataTypes
// - Primitive : Boolean , Number , String etc...
// - Non-Primitive : Object


//1#
//########################
//## Object Declaration ##
//########################
// {} == Stand for Object / Scope
// { record_1 , record_2  , record_3 , ...}
// each record => <key_name> : <value>
// <value> any DataType
// <key_name> DataType : string
// recode === property (คุณสมบัติ ,สิ่งทีมี) ==key-value pair

let user = {
    firstName: 'Fuse',
    lastName: 'Orr',
    age: 16,
    isAdmin: true,
    'Like human': true,


};

console.log(user);

//2#
//##############################
//## ACCESS , MODIFY , DELETE ##
//##############################
// Every action need <key_name> !!

// Dot notation (สัญลักษณ์ที่ใช้การดอท) 
//<obj>.<key name> === <value>
// ถ้าไม่มี record => return undefined
// ข้อจำกัด : เข้าถึง Key ที่มี space ไม่ได้

// GET , POLL , READ (ดึงข้อมูล)
console.log(user);
console.log(user.firstName === 'Fuse');   //value ที่เก็บใน user ที่เก็บในส่วนย่อย ที่ชื่อ firstName
console.log(user.lastName); //=> Orr
console.log(user.age);
console.log(user.isAdmin);
//console.log(user.Like human); //ไม่สามารถ Access key ที่มี space bar ได้

// MODIFY , UPDATE เหมือนกับ ADD ต่างที่เป็นคีย์อัพเดทใหม่
// Syntax : <obj>.<key_name> = newValue

user.firstName = 'Ohm';
user.age = 25;
user.age += 2;
user.age++;
console.log(user.age);

// ADD เหมือนกับ UPDATE ต่างที่เป็นคีย์ที่ไม่มี จะเพิ่มค่าใหม่
user.address = 'Bangkok';
console.log(user);

// DELETE
// Syntax : delete <obj>.<key_name>

delete user.isAdmin;
console.log(user);

//3#
//##############################
//## ACCESS , MODIFY , DELETE ##
//##############################

const employee = {
    fullName: 'John Doe',
    salary: 500_000,
    address: {
        district: 'Phaya thai',
        province: 'Bangkok',
        county: 'Thailand',
    },
};


//ACCESS
console.log(employee.salary);
console.log(employee.address);
console.log(employee.address.province); //chaining เข้าไป เพื่อดึงข้อมูล
console.log(employee.address.district); //chaining เข้าไป เพื่อดึงข้อมูล
console.log(employee.address.vllage); //chaining เข้าไป เพื่อดึงข้อมูล แต่ไม่เจอ จะเเสดงคำตอบ => undefined

employee.address.province = 'Nonthaburian';
delete employee.address.counrty;

//Preevent Crash !!

// Dot ใช้กับ Object เท่านั้น!! <obj>.<key>
// ห้ามมมมมมมมมมม ใช้กับ <undefined>.<key>
// วิธีแก้ optional chainig => <undefined>?.<key>

console.log(employee.addr); // undefined
console.log(employee.addr.province); // error เพราะ undefined ไม่มี property ที่ชื่อนี้ ==> undefined.province (สิ่งที่อยู่หน้า province เป็น undefined)
console.log(employee.addr?.province); // undefined
console.log(employee.address?.province); // Nonthaburian
console.log(employee.address?.village); // undefined


//4#
//##############################
//######## CHECK KEY ###########
//##############################

const product = {
    id: 227,
    name: 'Iphone',
    price: 50_000,
    //discount : 0.05,
    'is mobile': true,

};

console.log(product.discount); //undefined

// IN operator
// Syntax : <key_name_string> in <obj> => Boolean
console.log('name' in product);
console.log('discount' in product);

// Method hasOwnProperty
// Syntax : <obj>.hasOwnProperty(<key_name>) => Boolean
console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));

//5#
//##############################
//#### Bracket Notation [] ##### เข้าถึง key ที่มีช่องว่างได้
//##############################

// Syntax : <obj>["<key_name_string>"]
// ** 1. ใช้ bracket เมื่อไร ชื่อ key ข้างในต้องเป็น string 
// ** 2. ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // computed key
// Access key-value ผ่านชื่อตัวแปรได้ 

console.log(product.id);
console.log(product['id']);

//console.log(product.is mobile) crash
console.log(product['is mobile']);

product['name'] = 'Iphone-15';
//console.log(product);

let AAA = 'name';
console.log(product['name']); // Iphone-15
console.log(product[AAA]); // Iphone-15
console.log(product.AAA); // Product.AAA === product['AAA'] === undefined





//##############################
//########## LOOP ##############
//##############################

const user99 = {
    name: 'John',
    age: 99,
    isMarried: false,
};
// loop for 2nd
//variable = key  value = age
// แต่ยังเข้าถึง value ไม่ได้
//  user.key วิ่งไป user และดูว่ามี property คำว่า keyไหม
for (let key in user99) {

    console.log(key);  //=> value99 ยังเข้าถึงไม่ได้
    console.log(user[key]) // => รอบสอง เข้าถึง value 99 
    console.log(user['age']) // => รอบสอง เข้าถึง value 99 
    // user[key] = user[key] +5; รอบแรก 'john5'
    // user[key] = user[key] +5; รอบสอง 104
    // user[key] = user[key] +5; รอบสาม false + 5 =>  0+5

}

// Critical Point
// - bracket notation ใช้กับคัย์ที่เป็น string หรือ ตัวแปรที่เก็บ string
// - for(<key> in <obj>) JS จะ auto reassign key ใหม่ให้ทุกรอบ (string)
// - obj [key] = obj[key] + new => container = value + new
