const linerSearch = (nums: number[], target: number): boolean => {
  for(let i = 0; i < nums.length -1; i++) {
    if (nums[i] === target) return true;
  }
  return false;
};

const nums = [2, 4, 1, 6]

console.log(linerSearch(nums, 3));
