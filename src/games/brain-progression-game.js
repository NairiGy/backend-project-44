import { askQuestion, run } from '../index.js';
import generateNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const progressionLength = 10;
  const progressionStart = generateNumber(1, 10);
  const progressionStep = generateNumber(1, 10);
  const hidenPosition = generateNumber(0, progressionLength);
  const progression = [];
  progression[0] = progressionStart;
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  const answer = String(progression[hidenPosition]);
  progression[hidenPosition] = '..';
  const progressionAsText = progression.join(' ');
  const question = askQuestion(progressionAsText);

  return [question, answer];
};

export default () => run(generateRound, description);
