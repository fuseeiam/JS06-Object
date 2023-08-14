let user = {
    name: 'John',
    surname: 'Doe'
};
user.name = 'Matt';
delete user.name;

console.log(user);