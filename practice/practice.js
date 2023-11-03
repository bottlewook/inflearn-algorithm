function solution(arr) {
  let answer = "NO";
  let total = arr.reduce((a, b) => a + b, 0);
  let flag = 0;
  function DFS(vertex, sum) {
    if (flag) return;
    if (vertex === arr.length) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(vertex + 1, sum + arr[vertex]);
      DFS(vertex + 1, sum);
    }
  }
  DFS(1, 0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
