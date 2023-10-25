function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n < 1) return;
    DFS(Math.floor(n / 2));
    answer += n % 2;
  }
  DFS(n);
  return parseInt(answer);
}

console.log(solution(11));
