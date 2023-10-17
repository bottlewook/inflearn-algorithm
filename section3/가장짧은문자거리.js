function solution(s, t) {
  let left = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count++;
    if (s[i] === t) {
      count = 0;
    }
    left.push(count);
  }
  count = 0;
  for (let j = s.length - 1; j >= 0; j--) {
    count++;
    if (s[j] === t) {
      count = 0;
    }
    left[j] = Math.min(left[j], count);
  }
  return left;
}

let str = "teachermode";
console.log(solution(str, "e"));
