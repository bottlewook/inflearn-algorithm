function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(level, sum) {
    if (sum > m) return;
    if (level > answer) return;
    if (sum === m) {
      answer = Math.min(answer, level);
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(level + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
