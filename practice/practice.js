function solution(n) {
  let answer = [];
  let checkList = Array.from({ length: n }, () => 0);

  function DFS(vertex) {
    if (vertex === n + 1) {
      let temp = "";
      for (let i = 1; i <= checkList.length; i++) {
        if (checkList[i]) temp += i + " ";
      }
      if (temp.trim().length > 0) answer.push(temp);
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

console.log(solution(3));
