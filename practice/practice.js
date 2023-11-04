function solution(s, e) {
  let answer = 0;
  let checkList = Array.from({ length: 10001 }, () => 0);
  let distance = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  checkList[s] = 1;
  distance[s] = 0;
  while (queue.length) {
    let value = queue.shift();
    for (let nextValue of [value - 1, value + 1, value + 5]) {
      if (nextValue === e) return (answer = distance[value] + 1);
      if (nextValue > 0 && nextValue <= 10000 && checkList[nextValue] === 0) {
        checkList[nextValue] = 1;
        queue.push(nextValue);
        distance[nextValue] = distance[value] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));
