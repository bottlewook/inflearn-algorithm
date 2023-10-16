function solution(a, b, c) {
  let answer = a;
  if (a > b) {
    answer = b;
  }
  if (b > c) {
    answer = c;
  }
  return answer;
}

console.log(solution(2, 5, 1));
