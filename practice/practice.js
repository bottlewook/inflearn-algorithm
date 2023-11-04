function solution() {
  let answer = [];
  let queue = [];

  queue.push(1);
  while (queue.length) {
    let value = queue.shift();
    answer.push(value);
    for (let nextValue of [value * 2, value * 2 + 1]) {
      if (nextValue > 7) continue;
      queue.push(nextValue);
    }
  }

  return answer;
}

console.log(solution());
