function solution(n, k, card) {
  let set = new Set();
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        set.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  let answer = Array.from(set);
  answer.sort((a, b) => b - a);

  return answer[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
