import { askQuestion, gameEngine } from '../index.js';
import generateNumber from '../utils.js';

const randomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[generateNumber(3)];
};

const brainCalcGame = () => {
  const gameDescr = 'What is the result of the expression?';
  const questionGenerator = () => {
    const number1 = generateNumber(5);
    const number2 = generateNumber(5);
    const operation = randomOperation();
    const expr = `${number1} ${operation} ${number2}`;
    let correctAnswer;
    switch (operation) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
        break;
      default:
        throw new Error('Unknown operation for calc');
    }
    const givenAnswer = askQuestion(expr);

    return [givenAnswer, correctAnswer];
  };
  gameEngine(gameDescr, questionGenerator);
};

export default brainCalcGame;
