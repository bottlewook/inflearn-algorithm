function solution(arr) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      sum += arr[i];
      if (arr[i] < min) min = arr[i];
    }
  }
  return [sum, min];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
