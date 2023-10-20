function solution(m, arr) {
  let answer = 0;
  let i = 0;
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
    if (m === sum) {
      answer++;
    }
    while (m <= sum) {
      sum -= arr[i];
      i++;
      if (m === sum) {
        answer++;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
