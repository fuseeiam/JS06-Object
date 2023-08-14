// function calSalaries(Object) {
//     let isEmpty = true;
//     for (let key in Object) {
//         isEmtry = false;
//     }
//     return isEmpty;
// }

// //(obj) => Number
// function calSalaries(Object) {
//     // 1.Validate => แยก service
//     if (isEmpty(Object)) return 0;

//     // 2.Calculate

//     let sum = 0;
//     for (let key in Object) {
//         // <Obj>.<key>
//         // <Obj>[key]
//         // console.log(Object[key]); // Object['age']
//         sum += Object[key];
//     }
//     return sum;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let total = calSalaries(salaries);
// console.log(total);


// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function isEmptyObj(obj) {

    let isEmpty = true;

    for (let key in obj) {
        isEmpty = false; // ถ้าหลุดมารัน หนึ่งตัวเป็น false 
    }

    return isEmpty;
}

//check Empty
// input obj 
//return =>number
function calSalaries(obj) {

    // 1.Validate => แยก service 
    if (isEmptyObj(obj)) return 0;

    // 2.Calculate
    let sum = 0;
    for (let key in obj) {
        // <obj>.<key>
        // <obj>[key]
        console.log(obj[key]); // ลองใส่ age
        sum += obj[key];
        // ทุกๆครั้งที่วนจะเอาค่ามาทบ sum ให้เสมอ
    }
    return sum;
}

let total = calSalaries(salaries);
console.log(total);