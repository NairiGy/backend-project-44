import { askQuestion, gameEngine } from '../index.js';
import { isEven, randomInt } from '../utility.js';

const brainEvenGame = () => {
  const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionGenerator = () => {
    const number = randomInt();
    const givenAnswer = askQuestion(number);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    return [givenAnswer, correctAnswer];
  };
  gameEngine(gameDescr, questionGenerator);
};

export default brainEvenGame;
