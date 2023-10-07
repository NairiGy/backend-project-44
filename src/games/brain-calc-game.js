/* eslint-disable no-eval */
import { askQuestion, gameEngine } from '../index.js';
import { randomInt, randomOperation } from '../utility.js';

const brainCalcGame = () => {
  const gameDescr = 'What is the result of the expression?';
  const questionGenerator = () => {
    const number1 = randomInt(5);
    const number2 = randomInt(5);
    const operation = randomOperation();
    const expr = `${number1} ${operation} ${number2}`;
    const correctAnswer = String(eval(expr));
    const givenAnswer = askQuestion(expr);

    return [givenAnswer, correctAnswer];
  };
  gameEngine(gameDescr, questionGenerator);
};

export default brainCalcGame;
