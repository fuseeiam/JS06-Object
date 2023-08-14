const log = console.log;

log('Object Clone');

const todo = {
    task: 'Do HW',
    complete: false,
    due_date: '13-08-2023',
};

// const newTodo = yodo;
// newTodo.complete = true;
// log(todo.complete);

// Clone
const newTodo = {}
// 1. เอาต้นแบบมา Loop แล้ว Assign ทีละ key : value ให้ object ใหม่

for (let key in todo) {
    //Assign ทีละ key : value ให้ newTodo
    newTodo[key] = todo[key];
    // newTodo['task']=todo['task'] => 'Do HW'
    // newTodo['complete']=todo['complete'] => false
    // newTodo['due_date']=todo['due_date'] => '13-08-2023'
}

log(newTodo);
newTodo.complete = true;
log(newTodo.complete);
log(todo.complete);

// 2A. object.assign การใช้งานง่าย แต่การทำงานซับซ้อน

// const newTodo = {} //เป็น key ที่ว่างเปล่า
const newTodo = {
    complete: true,
};

// const todo = {
//     task: 'Do HW',
//     complete: false,
//     due_date: '13-08-2023',
// };



// EVAL Direction : RIGHT --> LEFT //กรณีที่ key ตัวซ้ำกัน ตัวขวา จะทับ ตัวซ้าย
Object.assign(newTodo, todo) // รับ parameter ไม่จำกัด (  ,   ,  ,  ,etc...) // return address ของ destination (param 1)

// 2B. object ของ assign
const newTodo = Object.assign({}, todo);

log(newTodo);



//#######################
//####### Plam ##########
//#######################
//Clone 

// const todo = {
//     task: 'do homework',
//     complete: false,
//     due_date: '13-08-2023',
// };

// // const newTodo = todo ; // เป็นการ cody address 

// // สร้าง obj ใหม่ 
// const newtodo = {} // สิ่งที่เกิดขึ้นกับ อันนี้ไม่เกีย่วกับ todo แล้ว
// // วิธีที่หนึ่ง เอาต้นแบบ มา loop แล้ว assign ทีละ key value ให้ obj ใหม่
// for (let key in todo) { //loop 3 times task complete due_date

//     //assign ทีละ key value ให้ obj ใหม่

//     newtodo[key] = todo[key]
//     // newtodo['task'] = todo['task'] => 'do Hm'
//     // newtodo['complete'] = todo['complte'] => false
//     // newtodo['due_date'] = todo['due_date'] => '13-08-2023'


// }
// console.log(newtodo);
// newdoto.complete = true;
// console.log(newtodo.complete);
// console.log(todo.complete);

// // วิธีที่สอง obj.assign (dst ,[src1,src2,sr3,.....,srcN])
// Object.assign(newtodo, todo)  // constructor function , รับพารามิเตอร์ได้ไม่จำกัด /evaluate process จากขวาไปซ้าย เอาtodo มา merge/override ผสมยุบรวม ถ้าnew เป็นค่าว่าง จะเอา อันเก่ามาเขียนทับ เอาแต่ละ key ที่มี ไป assing ให้ new 
// // ถ้าไม่ใช่ obj ว่างเปล่า เช่น new มี key ซ้ำ กับ old เอา ตัวขวาเขียน ทับ ตัวซ้าย
// // return address ของ destination (param 1) newtodo
// //Object.assign({},todo) 
// //const newTodo 
// //const newTodo = Object.assign({},todo);
