function solution(s) {
  let answer;
  let map = new Map();
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (!map.has(x)) {
      map.set(x, 1);
    } else {
      let value = map.get(x);
      map.set(x, ++value);
    }
  }

  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
