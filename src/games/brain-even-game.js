import { askQuestion, gameEngine } from '../index.js';
import generateNumber from '../utils.js';

const isEven = (int) => int % 2 === 0;
const brainEvenGame = () => {
  const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionGenerator = () => {
    const number = generateNumber();
    const givenAnswer = askQuestion(number);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    return [givenAnswer, correctAnswer];
  };
  gameEngine(gameDescr, questionGenerator);
};

export default brainEvenGame;
