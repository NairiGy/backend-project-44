/* eslint-disable no-eval */
import { welcome, askQuestion, playRound } from '../src/index.js';
import { randomInt, randomOperation } from '../src/utility.js';

const brainCalcGame = () => {
  const gameDescr = 'What is the result of the expression?';
  const name = welcome(gameDescr);

  let isGameGoing = true;
  let roundNumber = 1;

  while (isGameGoing) {
    const number1 = randomInt(5);
    const number2 = randomInt(5);
    const operation = randomOperation();
    const expr = `${number1} ${operation} ${number2}`;
    const correctAnswer = String(eval(expr));
    const givenAnswer = askQuestion(expr);
    isGameGoing = playRound(givenAnswer, correctAnswer, name, roundNumber);
    roundNumber += 1;
  }
};

export default brainCalcGame;
