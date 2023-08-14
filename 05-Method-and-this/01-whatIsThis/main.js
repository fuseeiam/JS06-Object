let user = {
    name: 'John',
    sayHi: function () {
        console.log(this.name);
    }
};

(user.sayHi)(); // * John เพราะได้ค่าจาก console.log(this.name)