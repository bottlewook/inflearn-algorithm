function solution(n, arr) {
  let answer = 0;
  let sum = 0;
  let temp = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    sum = 0;
    temp = x;
    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (max < sum) {
      max = sum;
      answer = x;
    } else if (max === sum) {
      if (answer < x) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
