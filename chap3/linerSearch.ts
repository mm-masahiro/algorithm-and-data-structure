const linerSearch = (nums: number[], target: number): number => {
  let min_value = nums[0];
  for(let i = 0; i < nums.length -1; i++) {
    // if (nums[i] === target) return true;
    if (nums[i] < min_value) min_value = nums[i]
  }
  return min_value;
};

const nums = [2, 4, 1, 6]

console.log(linerSearch(nums, 3));
