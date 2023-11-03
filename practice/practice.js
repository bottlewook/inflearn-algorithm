function solution(arr) {
  let answer = "NO";
  let sum = arr.reduce((a, b) => a + b, 0);
  let checkList = Array.from({ length: arr.length + 1 }, () => 0);
  let flag = 0;
  function DFS(vertex) {
    if (flag) return;
    if (vertex === arr.length + 1) {
      let chSum = 0;
      for (let i = 1; i < arr.length + 1; i++) {
        if (checkList[i]) chSum += arr[i];
      }
      if (sum - chSum === chSum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      checkList[vertex] = 1;
      DFS(vertex + 1);
      checkList[vertex] = 0;
      DFS(vertex + 1);
    }
  }

  DFS(1);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
