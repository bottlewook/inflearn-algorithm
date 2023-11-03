function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  function DFS(level, sum) {
    if (level === arr.length) {
      if (c >= sum && sum > answer) answer = Math.max(sum, answer);
    } else {
      DFS(level + 1, sum + arr[level]);
      DFS(level + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
