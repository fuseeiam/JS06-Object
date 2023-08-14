const log = console.log;
log('Methid and this keyword');

//#################################
//####### 1. Intro method #########
//#################################

//each record => called property
//each property => <key> : <value>

//some record => <key> : <FN>
//called method == ความสามารถของ Object

const programer = {
    name: 'Fuse',
    age: 28,
    dav: devWebsite,
    meet: meeting,
    sleep: sleep,
};

function devWebsite() {
    console.log("I'm working");
}

function meeting() {
    console.log("I'm meeting");
}

function sleep() {
    console.log("I'm sleep");
}

//property
//Syntax <obj>.<key>
log(programer.name);
log(programer.age);

// method == ความสามารถของ Object
//programmer.dev // devWebsite
//Syntax : <obj>.<method> ()
programer.dev();
programer.meet();
programer.sleep();


//#################################
//###### 2. Alternative Syntax#####
//#################################

const progrmmer = {
    //property shortHand
    name: 'John',
    age: 30,
    dev: function () {
        console.log("I'm working");
    },
    meet: () => console.log("I'm working"),
    //method shorthand
    sleep() {
        console.log("I'm sleeping");
    },
    // sleep : () => console.log("I'm sleeping")
};

programer.dev();
programer.meet();
programer.sleep();

//Mini-lab

// Object ของตัวเอง
//ระบุคุณสมบัติของตัวเอง 3 ข้อ
//ระบุคสวามสามารถของตัวเอง 4 ข้อ(cover ทุก syntax)
// key : nameFunction
// key : anonymous FN
// key : arrow FN
// key : shortHand

const me = {
    name: 'Fuse',
    age: 28,
    gender: female,
    hair: 'brown',
    eye: 'brown',
    sport: playSport,
    sleepAllDay: function () {
    },
    eatAllnight: (menu) => console.log(`I'm eating ${menu} all the time`),
    focus(task) {
        console.log(`I'm working on ${task}in Focus mode`);
    },
    // focus : () => {...logic...}
    // focus : function focus () {...logic...}
};

function playSport(type) {
    console.log(`I'm playing ${type}`);
}

me.tennis();
me.sleepAllDay();
me.eatAllnight('TAX');
me.focus('Javascript lab');


//#################################
//###### 3. Intro OOP #############
//#################################

// OOP : Object Oriented Program

const car = {
    brane: "Tesla",
    model: "x",
    drive: () => console.log('Driving'),
    'auto pilot': () => console.log('Self Driving'),
};

log(car.brand, car.model);

//Caller,Method
car.drive();
car['auto pilot']();

const calculator = {
    sum: (x, y) => x + y,
    minus: (x, y) => x - y,
};

let r1 = calculator.sum(5, 7);
let r2 = calculator.minus(7, 3);
log(r1, r2);

log(car.speed);
car.speed = calculator.sum(car.speed, 20);
log(car.speed);

//#################################
//###### 4. This Keyword ##########
//#################################

// JS Keyword : if , else , for , while  , do , switch , this
//Question : ทำอย่างไร method จะสามารถเข้าถึง property ของจัวเองได้
const user = {
    name: 'codecamp',
    age: 15,
    sayHi: function () {
        console.log(`Hello ${this.name}`);
    },
    growOld: function () {
        console.log(this);
        this.age++; // this == user เหมือนตัวมันเอง , This.age == user.age
    },
};

// user.sayHi(); //Hello codecamp
// user.name = 'software park';
// user.sayHi(); // Hello software park

// log(user.age); //15
// user.growOld();
// log(user.age); //16

//Q : ค่าของ  This  ถูก Solve ตั้งแต่ตอนที่เขียน function หรือเปล่า?
//A : ไม่
//This == Dynamics Caller/Dynamic context 
function dev() {
    console.log(`This feature developed by ${this.name}`);
}

หรือ
//FN Declaration 
// //function dev(feature) {
//     console.log(`${feature} feature developed by ${this.name}`);
// }

const programmer1 = {
    name: 'John',
    develop: dev,
};
const programmer2 = {
    name: 'Jane',
    develop: dev,
};

// A : This ถูก Solve ตอนเรียกใช้ Method
// Caller.method => this == Caller == Object before the dot
// Checkpoint-1 : This == object ที่เรียกใช้ Method

programmer1.develop(); // This feature developed by John
programmer2.develop(); // This feature developed by Jane

programmer1.develop(Login); // Login developed by John
programmer2.develop(Register); // Register developed by Jane



//################################################
//###### 5. Execution Context == Caller ##########
//################################################

//Global(Browser) : Window object

//window.alert("I'am Global");
//this.alert("I'am Global this");
//alert("I'am execute in window");

//FN Declaration ==> จะทำให้ SayHi ไปติด windowObj
// Hoisting
function sayHi() {
    console.log(this); //window
}
var a = 'm';

//Execute Context = Window
// window.sayHi(); //window
// this.sayHi();
// sayHi();

//Function Context
var name = 'Codecamp'
function sayHello() {
    console.log(this.name);
}

sayHello();
window.sayHello()

const user = {
    name: 'John',
    say: sayHello,
    scream: () => {
        console.log(`scream by ${this.name}`);
    },

};

//user Caller
user.say();
// Summary this == object caller

// Arrow ไม่มีความสามารถในการสร้าง context 
// Loose context => Chain to Window
user.scream(); //ห้ามใช้ this  กับ arrow FN // sream by codecamp
user.srcm(); //scream by John














