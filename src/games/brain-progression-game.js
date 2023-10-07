import { askQuestion, gameEngine } from '../index.js';
import generateNumber from './generateNumber.js';

const brainProgressionGame = () => {
  const gameDescr = 'What number is missing in the progression?';

  const questionGenerator = () => {
    const progressionLength = 10;
    const progressionStart = generateNumber(20);
    const progressionStep = generateNumber(10);
    const hidenPosition = generateNumber(progressionLength);
    const progression = [];
    progression[0] = progressionStart;
    for (let i = 1; i < progressionLength; i += 1) {
      progression[i] = progression[i - 1] + progressionStep;
    }
    const correctAnswer = String(progression[hidenPosition]);
    progression[hidenPosition] = '..';
    const progressionAsText = progression.join(' ');
    const givenAnswer = askQuestion(progressionAsText);

    return [givenAnswer, correctAnswer];
  };
  gameEngine(gameDescr, questionGenerator);
};

export default brainProgressionGame;
