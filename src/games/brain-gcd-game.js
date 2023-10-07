import { askQuestion, gameEngine } from '../index.js';
import { randomInt, findGcd } from '../utility.js';

const brainGcdGame = () => {
  const gameDescr = 'Find the greatest common divisor of given numbers.';
  const questionGenerator = () => {
    const number1 = randomInt();
    const number2 = randomInt();
    const correctAnswer = String(findGcd(number1, number2));
    const givenAnswer = askQuestion(`${number1} ${number2}`);

    return [givenAnswer, correctAnswer];
  };
  gameEngine(gameDescr, questionGenerator);
};

export default brainGcdGame;
