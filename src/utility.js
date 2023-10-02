const isEven = (int) => int % 2 === 0;
const randomInt = (max = 100) => Math.floor(Math.random() * max);
const randomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[randomInt(3)];
};

export { isEven, randomInt, randomOperation };
