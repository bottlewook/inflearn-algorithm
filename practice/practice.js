function solution(need, plan) {
  let queue = Array.from(need);
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length) return "NO";
  return "YES";
}
let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
