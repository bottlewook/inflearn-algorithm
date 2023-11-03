function solution(n, f) {
  let answer = [];
  let checkList = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);
  let flag = 0;
  let memo = Array.from(Array(30), () => Array(30).fill(0));
  function combi(n, r) {
    if (memo[n][r]) return memo[n][r];
    if (n === r || r === 0) return 1;
    else return (memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(level, sum) {
    if (flag) return;
    if (level === n && sum === f) {
      flag = 1;
      answer = p.slice();
    } else {
      for (let i = 1; i <= n; i++) {
        if (checkList[i] === 0) {
          checkList[i] = 1;
          p[level] = i;
          DFS(level + 1, sum + b[level] * p[level]);
          checkList[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
