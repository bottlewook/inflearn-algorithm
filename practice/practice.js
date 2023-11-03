function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  function DFS(level, score, time) {
    if (level === ps.length) {
      if (time > m) return;
      if (score > answer) answer = score;
    } else {
      DFS(level + 1, score + ps[level], time + pt[level]);
      DFS(level + 1, score, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
