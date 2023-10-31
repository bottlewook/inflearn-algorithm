function solution(arr) {
  let answer = [];
  let flag = 0;
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum - 100) {
        answer.push(...arr.splice(j, 1));
        answer.push(...arr.splice(i, 1));
        flag = 1;
        break;
      }
    }
    if (flag) break;
  }
  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
