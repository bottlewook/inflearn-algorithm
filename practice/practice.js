function count(songs, capacity) {
  let count = 1;
  let sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      count++;
      sum = x;
    } else sum += x;
  }
  return count;
}

function solution(m, songs) {
  let answer = 0;
  let lt = 0;
  let rt = songs.reduce((a, b) => a + b, 0);

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
