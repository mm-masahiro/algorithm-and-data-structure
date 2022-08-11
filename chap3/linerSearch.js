var linerSearch = function (nums, target) {
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === target)
            return true;
    }
    return false;
};
var nums = [2, 4, 1, 6];
console.log(linerSearch(nums, 3));
