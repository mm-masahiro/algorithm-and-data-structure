var linerSearch = function (nums, target) {
    var min_value = nums[0];
    for (var i = 0; i < nums.length - 1; i++) {
        // if (nums[i] === target) return true;
        if (nums[i] < min_value)
            min_value = nums[i];
    }
    return min_value;
};
var nums = [2, 4, 1, 6];
console.log(linerSearch(nums, 3));
