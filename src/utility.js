const isEven = (int) => int % 2 === 0;
const randomInt = (max = 100) => Math.floor(Math.random() * max);
const randomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[randomInt(3)];
};
const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export {
  isEven, randomInt, randomOperation, findGcd, isPrime,
};
