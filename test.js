// let t = test(5);
console.log(test(5));
function test(number) {
  let num1 = number;
  let sum = 1;

  for (let i = 0; i < number; i++) {
    console.log("num:", num1);
    sum = sum * (num1 - i);
    console.log("sum:", sum);
  }
  return sum;
}
