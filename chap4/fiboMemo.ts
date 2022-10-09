let resultMemo = {};

const fiboMemo = (num: number) => {
  if (num === 0) return 0;
  if (num === 1) return 1;

  if (resultMemo[num]) return resultMemo[num];

  console.log(`excused ${num}`);

  // 実行結果をメモ化している
  return resultMemo[num] = fiboMemo(num - 1) + fiboMemo(num - 2)
};

console.log(fiboMemo(6))
