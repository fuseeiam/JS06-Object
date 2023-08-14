const log = console.log;
log('Learn Res.');

//copied by Value
//copied by Reference


// PRIMITIVE
let message = 'Hello';

//**** COPY BY VALUE
let word = message;
log(message);
log(word);

message = 'Hi';
log(message);
log(word);


// OBJECT
// User เก็บ address ของ Literal Object
let user = {
    name: 'John',
};

// **** COPIED BY REFERENCE
let employee = user;
log(employee);

user.name = 'Jane';
log(user.name);
employee.name = 'Joe';
log(user.name);
