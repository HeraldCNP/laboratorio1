function addTwoDigits(num) {
    let a = num % 10;
    let b = parseInt(num / 10);
    let c = a + b;

    return c;
}

module.exports = addTwoDigits