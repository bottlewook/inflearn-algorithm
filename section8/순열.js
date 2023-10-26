function solution(m, arr) {
  let answer = [];
  let checkList = Array.from({ length: arr.length }, () => 0);
  let temp = Array.from({ length: m }, () => 0);

  function DFS(level) {
    if (level === m) {
      answer.push([...temp]);
    } else {
      for (let i = 0; i < checkList.length; i++) {
        if (checkList[i] === 0) {
          checkList[i] = 1;
          temp[level] = arr[i];
          DFS(level + 1);
          checkList[i] = 0;
        }
      }
    }
  }

  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
