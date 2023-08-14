var name = 'Joe';
function makeUser() {
    return {
        name: 'John',
        ref: this
    };
}
let user = makeUser();
console.log(user.ref.name); // *Joe  เพราะ let user = makeUser(); ซึ่งอยู่ใน window ผลที่ได้จึงเลือกตอบตัวข้างนอก (ตอน call makeUser => window ดังนั้นค่าที่ได้จึงใช้ Joe)