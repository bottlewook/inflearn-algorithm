function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let rank = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j] && i !== j) {
        rank++;
      }
    }
    answer[i] = rank;
  }
  return answer;
}

let arr = [87, 87, 92, 100, 76];
console.log(solution(arr));
