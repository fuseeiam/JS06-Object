let username = promt('What is your username?')
let email = promt('Enter e-mail...')
let password = promt('Enter Password...')

// const user = {
//     username: username,
//     email: email,
//     Password: password,
// }

// console.log(user);


//property shorthand ร่นการเขียนตัวซ้ำกัน
let user = {
    username,
    email,
    password
};
console.log(user);
