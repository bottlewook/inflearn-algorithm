function solution(n) {
  let checkList = Array.from({ length: n + 2 }, () => 0);
  checkList[1] = 1;
  checkList[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    checkList[i] = checkList[i - 1] + checkList[i - 2];
  }
  return checkList[n + 1];
}

console.log(solution(7));
