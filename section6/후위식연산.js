function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(x);
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(rt + lt);
      else if (x === "-") stack.push(rt - lt);
      else if (x === "*") stack.push(rt * lt);
      else if (x === "/") stack.push(rt / lt);
    }
  }

  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
