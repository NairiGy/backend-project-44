import { askQuestion, gameEngine } from '../index.js';
import { randomInt, isPrime } from '../utility.js';

const brainGcdGame = () => {
  const gameDescr = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionGenerator = () => {
    const number = randomInt();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    const givenAnswer = askQuestion(number);

    return [givenAnswer, correctAnswer];
  };
  gameEngine(gameDescr, questionGenerator);
};

export default brainGcdGame;
