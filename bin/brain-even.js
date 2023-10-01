#!/usr/bin/env node
import readline from "readline-sync";

const randomInt = (max=100) => Math.floor(Math.random() * max);
const isEven = (int) => int % 2 === 0;

const welcomeMsg = `Welcome to the Brain Games!
May I Have your name? `;
const name = readline.question(welcomeMsg);
console.log(`Hello, ${name}!`);
const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(gameDescr);
const numberOfQuestions = 3;
const successResponse = 'Correct!';
const failureResponse = (givenAnswer, correctAnswer) => { 
    return `${givenAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${name}`;
    };
const congratsMsg = `Congratulations, ${name}`;
for (let i = 0; i < numberOfQuestions; i += 1) {
    const number = randomInt();
    const question = `Question: ${number}
Your asnwer: `;
    const givenAnswer = readline.question(question);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (givenAnswer === correctAnswer && i === 2) {
        console.log(successResponse + '\n' + congratsMsg);
    } else if (givenAnswer === correctAnswer) {
        console.log(successResponse);
    } else {
        console.log(failureResponse(givenAnswer, correctAnswer));
        break;
    }
}
