function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      let grab;
      if (board[i][move - 1] !== 0) {
        grab = board[i][move - 1];
        stack.push(grab);
        board[i][move - 1] = 0;
        break;
      }
    }
  }

  let flag = true;
  while (flag) {
    flag = false;
    console.log(stack);
    for (let i = 0; i < stack.length - 1; i++) {
      if (stack[i] === stack[i + 1]) {
        stack.splice(i + 1, 1);
        stack.splice(i, 1);
        answer += 2;
        flag = true;
        break;
      }
    }
  }
  return answer;
}
let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
