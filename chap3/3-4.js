var pairMinSum = function (nums, anotherNums, target) {
    var min = Math.max.apply(Math, nums) + Math.max.apply(Math, anotherNums);
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < anotherNums.length; j++) {
            var sum = nums[i] + anotherNums[j];
            if (sum < target)
                return;
            if (min < sum)
                return;
            min = sum;
            // return min
        }
        console.log(min);
        return min;
    }
    return min;
};
var numbers = [8, 5, 4];
var anotherNumbers = [4, 1, 9];
var target = 10;
console.log(pairMinSum(numbers, anotherNumbers, target));
