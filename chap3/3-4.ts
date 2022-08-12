const pairMinSum = (nums: number[], anotherNums: number[], target: number): number | void => {
  let min = Math.max(...nums) + Math.max(...anotherNums);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < anotherNums.length; j++) {
      const sum = nums[i] + anotherNums[j];
      if (sum < target) return;
      if (min < sum) return;
      min = sum;
      return min
    }
    return min;
  }
  return min;
};

const numbers = [8, 5, 4];
const anotherNumbers = [4, 1, 9];

const target = 10;

console.log(pairMinSum(numbers, anotherNumbers, target));
