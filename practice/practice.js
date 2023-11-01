function solution(n, k) {
  let queue = Array.from({ length: n }, (_, index) => index + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  console.log(queue);
}

console.log(solution(8, 3));
