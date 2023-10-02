import { welcome, askQuestion, playRound } from '../src/index.js';
import { randomInt, findGcd } from '../src/utility.js';

const brainGcdGame = () => {
  const gameDescr = 'Find the greatest common divisor of given numbers.';
  const name = welcome(gameDescr);

  let isGameGoing = true;
  let roundNumber = 1;

  while (isGameGoing) {
    const number1 = randomInt();
    const number2 = randomInt();
    const correctAnswer = String(findGcd(number1, number2));
    const givenAnswer = askQuestion(`${number1} ${number2}`);
    isGameGoing = playRound(givenAnswer, correctAnswer, name, roundNumber);
    roundNumber += 1;
  }
};

export default brainGcdGame;
