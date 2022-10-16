const frogDitsribution = (h: number[]): number => {
  // iの値が確定した時にi+1やi+2の値を更新させる
  const minCosts: number[] = [];
  let min: number = Infinity;

  for (let i = 0; i < h.length; i++) {
    minCosts.push(Infinity);
  };

  minCosts[0] = 0;

  for (let i = 0; i < h.length; i++) {
    if (i + 1 < N) minCosts[i + 1] = chmin(minCosts[i + 1], minCosts[i] + Math.abs(h[i] - h[i + 1]));
    if (i + 2 < N) minCosts[i + 2] = chmin(minCosts[i + 2], minCosts[i] + Math.abs(h[i] - h[i + 2]));
  };

  return minCosts[minCosts.length - 1];
};

const chmin = (origin: number, target: number): number => {
  if (origin > target) {
    origin = target;
  };
  return origin;
};

const N = 7;
const h = [2, 9, 4, 5, 1, 6, 10]

console.log(frogDitsribution(h));
