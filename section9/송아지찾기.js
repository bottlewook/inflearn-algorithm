function solution(s, e) {
  let answer = 0;
  let checkList = Array.from({ length: 10001 }, () => 0);
  let distance = Array.from({ length: 10001 }, () => 0);
  let queue = [];

  checkList[s] = 1;
  queue.push(s);
  distance[s] = 0;

  while (queue.length) {
    let vertex = queue.shift();

    for (let nextVertex of [vertex - 1, vertex + 1, vertex + 5]) {
      if (nextVertex === e) return distance[vertex] + 1;
      if (
        nextVertex > 0 &&
        nextVertex <= 10000 &&
        checkList[nextVertex] === 0
      ) {
        checkList[nextVertex] = 1;
        queue.push(nextVertex);
        distance[nextVertex] = distance[vertex] + 1;
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));
