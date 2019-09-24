module.exports = function check(str, bracketsConfig) {
    // your solution
    const brStrArr = bracketsConfig.map(item => item.join(''));
    let k = Math.floor(str.length / 2);
    while (k) {
        brStrArr.map(item => str.indexOf(item) !== -1 ? str = str.replace(item, "") : str);
        k--;
    }
    return str === "" ? true : false;
}
