function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = Math.floor(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
