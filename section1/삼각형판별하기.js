function solution(a, b, c) {
  const sum = a + b + c;
  const max = Math.max(a, b, c);
  return max > sum - max;
}

console.log(solution(13, 30, 17));
