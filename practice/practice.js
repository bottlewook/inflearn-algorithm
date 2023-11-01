function solution(m, product) {
  let answer = 0;
  product.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  console.log(product);
  for (let i = 0; i < product.length; i++) {
    let max = 1;
    let money = m - (product[i][0] / 2 + product[i][1]);
    for (let j = 0; j < product.length; j++) {
      if (i !== j && product[j][0] + product[j][1] > money) break;
      if (i !== j && product[j][0] + product[j][1] <= money) {
        max++;
        money -= product[j][0] + product[j][1];
      }
    }
    answer = Math.max(answer, max);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
