function solution(n, r) {
  let answer = 0;
  let memo = Array.from(Array(60), () => Array(60).fill(0));
  function DFS(n, r) {
    if (memo[n][r] > 0) return memo[n][r];
    if (r === 0 || n === r) return 1;
    else return (memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(50, 20));
