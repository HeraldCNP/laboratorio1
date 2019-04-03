function candies(a, b) {
    let c = parseInt(b / a);
    let d = c * a;
    return d;
    // console.log(d);
}
// console.log(candies(3, 10));
module.exports = candies