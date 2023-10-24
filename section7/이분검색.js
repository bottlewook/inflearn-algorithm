function solution(target, arr) {
  arr.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  while (target !== arr[middleIndex] && leftIndex <= rightIndex) {
    if (arr[middleIndex] > target) rightIndex = middleIndex - 1;
    else if (arr[middleIndex] < target) leftIndex = middleIndex + 1;
    middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  }

  return arr[middleIndex] === target ? middleIndex : -1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
