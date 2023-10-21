import { askQuestion, run } from '../index.js';
import generateNumber from '../utils.js';

const isEven = (int) => int % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = generateNumber(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = askQuestion(number);

  return [question, answer];
};

export default () => run(generateRound, description);
