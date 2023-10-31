function solution(test) {
  let answer = 0;
  let m = test.length; // 3
  let n = test[0].length; // 4

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      let count = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) count++;
      }
      if (count === m) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
