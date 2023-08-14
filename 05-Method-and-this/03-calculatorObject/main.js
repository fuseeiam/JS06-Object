let calculator = {
    read() {
        this.x = prompt("number1");
        this.y = prompt("number2");
    },
    sum() {
        return this.x + this.y
    },
    mul() {
        return this.x * this.y;
    },
};

log(calculator);

calculator.read();
alert(calculator.sum());
alert(calculator.mul());