function solution(s) {
  let stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}

let a = "(()(()))(()";
console.log(solution(a));
