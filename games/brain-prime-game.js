import { welcome, askQuestion, playRound } from '../src/index.js';
import { randomInt, isPrime } from '../src/utility.js';

const brainGcdGame = () => {
  const gameDescr = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const name = welcome(gameDescr);

  let isGameGoing = true;
  let roundNumber = 1;

  while (isGameGoing) {
    const number = randomInt();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    const givenAnswer = askQuestion(number);
    isGameGoing = playRound(givenAnswer, correctAnswer, name, roundNumber);
    roundNumber += 1;
  }
};

export default brainGcdGame;
