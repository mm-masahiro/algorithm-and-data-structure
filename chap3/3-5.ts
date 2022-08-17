// https://leetcode.com/problems/valid-parentheses/submissions/

function isValid(s: string): boolean {
  //     passする条件
  //     1. 各かっこの開きかっこと閉じかっこの個数が同じである
  //     2. かっこが正しく機能している
      
  //     それぞれのかっこの個数をカウントする
  //     pairの対応表を作る?
  //     それぞれのかっこがどこにあるかを保持させる?
  //     ネストしたかっこにどう対応させる？
      
  //     最後に来た開きかっこが次に出てくる閉じかっこに対応すればOK → これをどう実装するか？

    const devidedStrings = s.split("")
    const parenthesesPairs = {
      '(': ')',
      '[': ']',
      '{': '}',
    }
    const parentheses = [];
    
    console.log(parenthesesPairs['('])
    
    for(let i = 0; i < devidedStrings.length; i++) {
      if (devidedStrings[i] === '(' || devidedStrings[i] === '[' || devidedStrings[i] === '{') {
        parentheses.push(devidedStrings[i])
      };
      if (devidedStrings[i] === ')' || devidedStrings[i] === ']' || devidedStrings[i] === '}') {
        const poppedString = parentheses.pop()
        if (parenthesesPairs[poppedString] !== devidedStrings[i]) {
            return false
        }
      }
    }

    return true
  };