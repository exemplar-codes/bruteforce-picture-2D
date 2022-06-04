let arr = [];

let n = 8;

for (let i = 0; i < n; i++) {
  let newArr = [];
  for (let j = 0; j < n; j++) newArr.push((i + j) % 2);
  arr.push(newArr);
}

console.log(arr);
