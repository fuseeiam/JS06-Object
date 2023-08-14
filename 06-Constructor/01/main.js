function Calculator() {
    let num1, num2;
    this.read = function () {
        this.num1 = +prompt('Enter Number 1 : ');
        this.num2 = +prompt('Enter Number 2 : ');
    };
    this.sum = function () {
        return this.num1 + this.num2;
    };
    this.mul = function () {
        return this.num1 * this.num2;
    };
};

const calc1 = new Calculator();
console.log(calc1); // obj