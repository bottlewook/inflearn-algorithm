function solution(arr) {
  let answer = 0;
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let row = 0;
  let col = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      row += arr[i][j];
      col += arr[j][i];
    }
    max = Math.max(max, row, col);
    row = 0;
    col = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    row += arr[i][i];
    col += arr[i][arr.length - 1 - i];
  }
  max = Math.max(max, row, col);
  return max;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
