import { askQuestion, run } from '../index.js';
import generateNumber from '../utils.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const number = generateNumber(1, 10);
  const answer = isPrime(number) ? 'yes' : 'no';
  const question = askQuestion(number);

  return [question, answer];
};

export default () => run(generateRound, description);
