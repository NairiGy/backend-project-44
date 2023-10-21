import { askQuestion, run } from '../index.js';
import generateNumber from '../utils.js';

const randomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[generateNumber(1, 3)];
};

const description = 'What is the result of the expression?';
const generateRound = () => {
  const number1 = generateNumber(1, 20);
  const number2 = generateNumber(1, 20);
  const operation = randomOperation();
  const expr = `${number1} ${operation} ${number2}`;
  let answer;
  switch (operation) {
    case '+':
      answer = String(number1 + number2);
      break;
    case '-':
      answer = String(number1 - number2);
      break;
    case '*':
      answer = String(number1 * number2);
      break;
    default:
      throw new Error('Unknown operation for calc');
  }
  const question = askQuestion(expr);

  return [question, answer];
};

export default () => run(generateRound, description);
