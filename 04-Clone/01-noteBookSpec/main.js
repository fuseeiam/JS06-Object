const notebook2 = {};
for (let key in notebook) {

    notebook2[key] = notebook[key];
}

console.log(notebook2);

Object.assign({}, notebook);

const notebook3 = Object.assign({}, notebook);
console.log(notebook3);
console.log(notebook3);