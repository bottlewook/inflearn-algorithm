function solution(arr) {
  let answer = "NO";
  let total = arr.reduce((a, b) => a + b, 0);
  let length = arr.length;
  let flag = 0;

  function DFS(level, sum) {
    if (flag) return;
    if (level === length) {
      if (total - sum === sum) {
        flag = 1;
        answer = "YES";
      }
    } else {
      DFS(level + 1, sum + arr[level]);
      DFS(level + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
