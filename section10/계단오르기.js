function solution(n) {
  let answer;
  let dynamic = Array.from({ length: n + 1 }, () => 0);
  dynamic[1] = 1;
  dynamic[2] = 2;
  for (let i = 3; i <= n; i++) {
    dynamic[i] = dynamic[i - 1] + dynamic[i - 2];
  }

  answer = dynamic[n];
  return answer;
}

console.log(solution(7));
