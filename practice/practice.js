function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let temp = x;
    let sum = 0;
    while (temp >= 1) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (max === sum) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
