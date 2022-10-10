// 部分和
// (3, 2, 6, 5) W=14
// -> (3, 2, 6)を使って14
// -> (3, 2)を使って14
// -> (3)を使って14 or (3)を使って12
// (3, 2)を使って8(14 - 6 = 8)
// -> (3)を使って8 or (3)を使って6
// (3, 2, 6)を使って9
// -> (3, 2)を使って9 or (3, 2)を使って3
// (3, 2)を使って9
// -> (3)を使って9 or (3)を使って7
// (3, 2)を使って3
// -> (3)を使って3 or (3)を使って1
// func(N, W)
var N = 4;
var nums = [3, 2, 6, 5];
var W = 140;
var partialSum = function (nums, sum) {
    if (nums.length === 0)
        return sum === 0 ? true : false;
    if (partialSum(nums.slice(0, -1), sum))
        return true;
    if (partialSum(nums.slice(0, -1), sum - Number(nums.slice(-1))))
        return true;
    return false;
};
console.log(partialSum(nums, W));
