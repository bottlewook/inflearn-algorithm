function solution(need, plan) {
  let queue = need.split("");

  for (let x of plan) {
    if (queue.includes(x)) {
      if (queue.shift() !== x) return "NO";
    }
  }
  if (queue.length) return "NO";
  return "YES";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
