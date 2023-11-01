function solution(s) {
  let stack = [];
  for (let x of s) {
    if (x === "(") stack.push("(");
    else {
      let temp = stack.pop();
      if (temp === undefined) return "NO";
    }
  }

  if (stack.length) return "NO";

  return "YES";
}

let a = "(()(()))(()";
console.log(solution(a));
