function solution(s) {
  let answer = "";
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (count === 1) {
        answer += s[i];
      } else {
        answer += s[i] + count.toString();
      }
      count = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
