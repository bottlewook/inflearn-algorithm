function solution(n) {
  let answer = 0;
  function DFS(n) {
    answer += n;
    if (n <= 1) return 1;
    DFS(--n);
  }
  DFS(n);
  return answer;
}

console.log(solution(10));
