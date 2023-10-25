function solution(n) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(2 * v);
      console.log(v);
      DFS(2 * v + 1);
    }
  }
  DFS(n);
}

console.log(solution(1));
