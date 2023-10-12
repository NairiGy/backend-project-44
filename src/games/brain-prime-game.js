import { askQuestion, gameEngine } from '../index.js';
import generateNumber from '../utils.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const brainPrimeGame = () => {
  const gameDescr = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionGenerator = () => {
    const number = generateNumber();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    const givenAnswer = askQuestion(number);

    return [givenAnswer, correctAnswer];
  };
  gameEngine(gameDescr, questionGenerator);
};

export default brainPrimeGame;
