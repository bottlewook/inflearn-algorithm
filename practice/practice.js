function solution(n) {
  function DFS(n) {
    if (n > 7) return;
    else {
      DFS(2 * n);
      DFS(2 * n + 1);
      console.log(n);
    }
  }
  DFS(n);
}

console.log(solution(1));
