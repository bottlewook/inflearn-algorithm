function solution(n, r) {
  let answer;
  let memo = Array.from(Array(50), () => Array(50).fill(0));

  function DFS(n, r) {
    if (memo[n][r]) return memo[n][r];
    if (n === r || r === 0) {
      return 1;
    } else {
      return (memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(49, 10));
