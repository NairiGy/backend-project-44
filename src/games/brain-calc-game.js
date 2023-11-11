import { askQuestion, run } from '../index.js';
import generateNumber from '../utils.js';

const randomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[generateNumber(1, 3)];
};

const calcMap = {
  '+': (number1, number2) => String(number1 + number2),
  '-': (number1, number2) => String(number1 - number2),
  '*': (number1, number2) => String(number1 * number2),
};
const description = 'What is the result of the expression?';
const generateRound = () => {
  const number1 = generateNumber(1, 20);
  const number2 = generateNumber(1, 20);
  const operation = randomOperation();
  const expr = `${number1} ${operation} ${number2}`;
  const answer = calcMap[operation](number1, number2);
  const question = askQuestion(expr);

  return [question, answer];
};

export default () => run(generateRound, description);
