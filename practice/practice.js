function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let temp = 0;
    let reverse = 0;
    while (x) {
      temp = x % 10;
      reverse = reverse * 10 + temp;
      x = Math.floor(x / 10);
    }
    if (isPrime(reverse)) answer.push(reverse);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
