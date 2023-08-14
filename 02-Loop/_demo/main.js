const user = {
    firstName: 'Codecamp',
    lastName: 'Software Park',
    age: 15,
    // key:"JaAee",
};

// For IN : Loop through Object
// for (let <key_variable> in <obj>){}

for (let key in user) {

    // console.log(key); หรือ
    console.log(`KEY : ${key}`); // คำตอบจะไปเลือกใช้ตัวแปร key
    //1st : let key = "firstName"
    //2nd : let key = "lastName"
    //3rd : let key = "age"


    // console.log(user[key]); หรือ
    console.log(`VAL : ${user[key]}`);// คำตอบจะไปเลือกใช้ value ใน key
    //1st : user[key] == user['firstName'] ===> Codecamp
    //2nd : user[key] == user['firstName'] ===> Software Park
    //3rd : user[key] == user['firstName'] ===> 15

    //console.log(user.key); หรือ
    console.log('\n');
    //1st : user[key] == user['firstName'] ===> undefined
    //2nd : user[key] == user['firstName'] ===> undefined
    //3rd : user[key] == user['firstName'] ===> undefined


}

//'firstName' in user; // true
//'age' in user; // true
//'phone' in user; // true



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
