// ex num1 = 51とnum2 = 15の最大公約数
// num1 / num2 = 51 / 15 = 3...6 -> 51 = 15 * 3 + 6
// 15 / 6 = 2...3 -> 15 = 6 * 2 + 3
// 6 / 2 = 3 end
// 第二引数があまりになる
var eculidAlgo = function (num1, num2) {
    if (num2 === 0)
        return num1;
    return eculidAlgo(num2, num1 % num2);
};
console.log(eculidAlgo(51, 15));
