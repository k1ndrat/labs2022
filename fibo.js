let x = 0;
let y = 0;

console.log(0);

const N = 30;

for (let i = 0; i < N; i++) {
  if (x == 0) {
    x = 1;
  } else {
    z = x;
    x = x + y;
    y = z;
  }
  console.log(x);
}
