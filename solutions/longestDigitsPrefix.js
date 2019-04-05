function longestDigitsPrefix(cad) {
    var e = '';
    for (var i = 0; i <= cad.length - 1; i++) {
        if ('0123456789'.indexOf(cad.charAt(i)) !== -1) {
            var d = cad.charAt(i);
            e += d;
        } else {
            break;
        }
    }
    return e;
}
// console.log(longestDigitsPrefix("123aa1"));
module.exports = longestDigitsPrefix