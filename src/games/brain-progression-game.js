import { askQuestion, run } from '../index.js';
import generateNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (length) => {
  const progressionStart = generateNumber(1, 10);
  const progressionStep = generateNumber(1, 10);
  const progression = [];
  progression[0] = progressionStart;
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = 10;
  const hidenPosition = generateNumber(0, progressionLength);
  const progression = generateProgression(progressionLength);
  const answer = String(progression[hidenPosition]);
  progression[hidenPosition] = '..';
  const progressionAsText = progression.join(' ');
  const question = askQuestion(progressionAsText);

  return [question, answer];
};

export default () => run(generateRound, description);
