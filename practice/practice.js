function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let table = [];
  for (let time of times) {
    table.push([time[0], "s"]);
    table.push([time[1], "e"]);
  }
  table.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt(0) - b[1].charCodeAt(0);
    else return a[0] - b[0];
  });

  let people = 0;
  for (let x of table) {
    if (x[1] === "s") {
      people++;
    } else {
      people--;
    }
    answer = Math.max(answer, people);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
