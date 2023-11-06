function count(stable, dist) {
  let count = 1;
  let position = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - position >= dist) {
      count++;
      position = stable[i];
    }
  }
  return count;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
