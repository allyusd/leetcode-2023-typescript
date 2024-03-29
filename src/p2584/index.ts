export function exportWarp(nums: number[]): number {
  return findValidSplit(nums);
}

// https://stackoverflow.com/a/17445322/2613884
function gcd(a: number, b: number) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
}

// 2023-03-04
// 2584. Split the Array to Make Coprime Products
function findValidSplit(nums: number[]): number {
  const product = (arr: number[]): number => {
    return arr.reduce((p, c) => p * c);
  };

  for (let i = 0; i < nums.length - 1; i++) {
    const pp = product(nums.slice(0, i + 1));
    const sp = product(nums.slice(i + 1, nums.length));

    // console.log(`pp: ${pp}`);
    // console.log(`sp: ${sp}`);

    const g = gcd(pp, sp);
    // console.log(`g: ${g}`);

    if (g === 1) {
      return i;
    }
  }

  return -1;
}
