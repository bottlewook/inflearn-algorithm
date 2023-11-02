function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    if (!answer.includes(arr[i])) {
      answer.unshift(arr[i]);
      answer.pop();
    } else {
      answer.splice(answer.indexOf(arr[i]), 1);
      answer.unshift(arr[i]);
    }
  }
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
