function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(s[i])) answer.push(s[i]);
  }

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
