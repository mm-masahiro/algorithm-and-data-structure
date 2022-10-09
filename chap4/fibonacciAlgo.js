// F0 = 0
// F1 = 1
// FN = FN-1 + FN-2
// 0,1,1,2,3,5,8
var fibonacciAlgo = function (n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    console.log("excuesed " + n);
    // 4, 3, 2, 2, 3, 2
    // 5
    // fibonacciAlgo(4) + fibonacciAlgo(3)
    // 4, 3
    // fibonacciAlgo(3)
    // fibonacciAlgo(2)
    // 3, 2
    // fibonacciAlgo(2)
    // fibonacciAlgo(1) -> not out put to cl
    // 5
    // fibonacciAlgo(4) + fibonacciAlgo(3)
    // 5, 4
    // fibonacciAlgo(3) + fibonacciAlgo(2)
    // 5, 4, 3
    // fibonacciAlgo(2) + fibonacciAlgo(1) -> not out put to cl
    // 5, 4, 3, 2
    // fibonacciAlgo(1) -> not out put to cl + fibonacciAlgo(0) -> not out put to cl
    // 左辺の実行が終わったからルートの右辺
    // 左辺から実行されてるぽい
    // 左辺が終わったら右辺の実行
    return fibonacciAlgo(n - 1) + fibonacciAlgo(n - 2);
};
console.log(fibonacciAlgo(6));
