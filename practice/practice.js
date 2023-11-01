function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
    if (sum === m) {
      answer++;
    }
    while (sum > m) {
      sum -= arr[i];
      if (sum === m) answer++;
      i++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
