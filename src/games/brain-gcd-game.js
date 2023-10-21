import { askQuestion, run } from '../index.js';
import generateNumber from '../utils.js';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';
const generateRound = () => {
  const number1 = generateNumber(1, 30);
  const number2 = generateNumber(1, 30);
  const answer = String(findGcd(number1, number2));
  const question = askQuestion(`${number1} ${number2}`);

  return [question, answer];
};

export default () => run(generateRound, description);
