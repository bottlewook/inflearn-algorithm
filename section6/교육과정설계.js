function solution(need, plan) {
  let queue = need.split("");
  let curri = plan.split("");
  let temp = queue.shift();
  for (let x of curri) {
    if (temp === x) {
      temp = queue.shift();
    }
    if (!queue.length) return "YES";
  }
  return "NO";
}

let a = "CBA";
let b = "BCDAGE";
console.log(solution(a, b));
