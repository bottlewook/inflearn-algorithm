function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && max < dy[j]) {
        max = dy[j];
      }
      dy[i] = max + 1;
      answer = Math.max(answer, dy[i]);
    }
  }
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
