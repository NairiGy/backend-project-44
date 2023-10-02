import { welcome, askQuestion, playRound } from '../src/index.js';
import { randomInt } from '../src/utility.js';

const brainProgressionGame = () => {
  const gameDescr = 'What number is missing in the progression?';
  const name = welcome(gameDescr);

  let isGameGoing = true;
  let roundNumber = 1;

  while (isGameGoing) {
    const progressionLength = 10;
    const progressionStart = randomInt(20);
    const progressionStep = randomInt(10);
    const hidenPosition = randomInt(progressionLength);
    const progression = [];
    progression[0] = progressionStart;
    for (let i = 1; i < progressionLength; i += 1) {
      progression[i] = progression[i - 1] + progressionStep;
    }
    const correctAnswer = String(progression[hidenPosition]);
    progression[hidenPosition] = '..';
    const progressionAsText = progression.join(' ');
    const givenAnswer = askQuestion(progressionAsText);
    isGameGoing = playRound(givenAnswer, correctAnswer, name, roundNumber);
    roundNumber += 1;
  }
};

export default brainProgressionGame;
