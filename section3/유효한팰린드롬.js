function solution(s) {
  let str = s.toLowerCase().replace(/[^a-z]/g, "");
  return str === str.split("").reverse().join("");
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
