function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);

  while (queue.length) {
    let vertex = queue.shift();
    answer += vertex + " ";

    for (let nv of [2 * vertex, 2 * vertex + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }

  return answer;
}

console.log(solution());
