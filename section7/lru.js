function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((element) => {
    let position = -1;
    for (let i = 0; i < size; i++) if (element === answer[i]) position = i;
    if (position === -1) {
      for (let j = size - 1; j >= 0; j--) {
        answer[j] = answer[j - 1];
      }
      answer[0] = element;
    } else {
      for (let j = position; j >= 1; j--) {
        answer[j] = answer[j - 1];
      }
      answer[0] = element;
    }
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
