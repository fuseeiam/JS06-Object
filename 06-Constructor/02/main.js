function Accumulator() {
    let num;
    this.currentValue = 0;
    this.read = function () {
        this.num = +prompt("Enter startingValue :");
        return this.currentValue += this.num;
    };
    this.show = function () {
        return alert(this.currentValue);
    };
}

const acc1 = new Accumulator();