import { askQuestion, gameEngine } from '../index.js';
import generateNumber from '../utils.js';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};
const brainGcdGame = () => {
  const gameDescr = 'Find the greatest common divisor of given numbers.';
  const questionGenerator = () => {
    const number1 = generateNumber();
    const number2 = generateNumber();
    const correctAnswer = String(findGcd(number1, number2));
    const givenAnswer = askQuestion(`${number1} ${number2}`);

    return [givenAnswer, correctAnswer];
  };
  gameEngine(gameDescr, questionGenerator);
};

export default brainGcdGame;
