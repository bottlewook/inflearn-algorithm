function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let checkList = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(vertex) {
    if (vertex === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        if (graph[vertex][i] === 1 && checkList[i] === 0) {
          checkList[i] = 1;
          DFS(i);
          checkList[i] = 0;
        }
      }
    }
  }
  checkList[1] = 1;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
