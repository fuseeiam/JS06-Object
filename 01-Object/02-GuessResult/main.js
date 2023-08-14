const user = {
    email: 'cc@gmail.com',
    isActive: true
};

user.isActive = false;
console.log(user); // * email: 'cc@gmail.com',isActive: fales
user = {};
console.log(user); // ** error เพราะไม่สามารถ กำหนดตัวแปร user ซ้ำอีก
