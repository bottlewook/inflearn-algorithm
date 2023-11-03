function solution(m, arr) {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);
  let checkList = Array.from({ length: arr.length }, () => 0);

  function DFS(level) {
    if (level === m) {
      answer.push([...temp]);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (checkList[i] === 0) {
          checkList[level] = 1;
          temp[level] = arr[i];
          DFS(level + 1);
          checkList[level] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
