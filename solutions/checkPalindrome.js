function checkPalindrome(cad) {
    var x = cad;
    var z = x.split('').reverse().join('');
    if (x == z) {
        return true;
    } else {
        return false;
    }
}
module.exports = checkPalindrome