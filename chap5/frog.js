// 動的計画法: frog問題
var N = 7;
var h = [2, 9, 4, 5, 1, 6, 10];
// h[0]までいくコスト -> 0
// h[1]までいくコスト -> |2 - 9| = 7
// h[2]までいくコスト -> 7 + |9 - 4| = 12(h[1]までにいくコスト + h[1]からh[2]にいくコスト) or |2 - 4| = 2(h[0]から1つ飛ばしでh[2]にいく時)
// →h[2]までにいくコストは、12 or 2なので、最小の2をメモする
// h[3]までいくコスト -> 2 + |4 - 5| = 3(h[2]までの最小コスト+h[2]からh[3]にいくコスト) or |9 - 5| = 4
// →h[3]までにいくコストは、3 or 4なので、最小の3をメモする
// h[4]までいくコスト -> 3 + |5 - 1| = 7 or 2 + |4 - 1| = 5
// →h[4]までにいくコストは、7 or 5なので、最小の5をメモする
// h[5]までいくコスト -> 5 + |1 - 6| = 10 or 3 + |5 - 6| = 4
// →h[5]までにいくコストは、10 or 4なので、最小の4をメモする
// h[6]までいくコスト -> 4 + |6 - 10| = 8 or 5 + |1 - 10| = 14
// →h[6]までにいくコストは、8 or 14なので、最小の8をメモする
// コストメモった箱
// [0, 7, 2, 3, 5, 4, 8]
var frog = function (h) {
    // [i - 1]と[i - 2]のコストを比較/メモをしつつ、最小のコストを計算する
    var minCosts = [0];
    var oneJumpCost = 0;
    var twoJumpCost = 0;
    for (var i = 1; i < h.length; i++) {
        if (i === 1) {
            oneJumpCost = Math.abs(h[i - 1] - h[i]) + minCosts[i - 1];
            minCosts.push(oneJumpCost);
        }
        else {
            oneJumpCost = Math.abs(h[i - 1] - h[i]) + minCosts[i - 1];
            twoJumpCost = Math.abs(h[i - 2] - h[i]) + minCosts[i - 2];
            if (oneJumpCost < twoJumpCost)
                minCosts.push(oneJumpCost);
            if (twoJumpCost < oneJumpCost)
                minCosts.push(twoJumpCost);
        }
        ;
    }
    return Number(minCosts.slice(-1));
};
console.log(frog(h));
