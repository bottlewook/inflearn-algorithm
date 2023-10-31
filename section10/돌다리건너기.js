function solution(n) {
  let dynamic = Array.from({ length: n + 2 }, () => 0);
  dynamic[1] = 1;
  dynamic[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dynamic[i] = dynamic[i - 2] + dynamic[i - 1];
  }
  return dynamic[n + 1];
}

console.log(solution(7));
