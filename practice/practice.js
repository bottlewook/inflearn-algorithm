function solution(n, m) {
  let answer = [];
  let checkList = Array.from({ length: m }, () => 0);
  function DFS(level) {
    if (level === m) {
      answer.push([...checkList]);
    } else {
      for (let i = 1; i <= n; i++) {
        checkList[level] = i;
        DFS(level + 1);
      }
    }
  }
  DFS(0);

  return answer;
}

console.log(solution(3, 2));
