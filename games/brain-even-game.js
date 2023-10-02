import { welcome, askQuestion, playRound } from '../src/index';
import { isEven, randomInt } from '../src/utility';

const brainEvenGame = () => {
  const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = welcome(gameDescr);
  let isGameGoing = true;
  let roundNumber = 1;

  while (isGameGoing) {
    const number = randomInt();
    const givenAnswer = askQuestion(number);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    isGameGoing = playRound(givenAnswer, correctAnswer, name, roundNumber);
    roundNumber += 1;
  }
};

export default brainEvenGame;
