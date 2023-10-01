import readline from "readline-sync";

const randomInt = (max=100) => Math.floor(Math.random() * max);
const isEven = (int) => int % 2 === 0;
const welcomeMsg = `Welcome to the Brain Games!
May I Have your name? `;
const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';
const successResponse = 'Correct!';
const failureResponse = (givenAnswer, correctAnswer, name) => { 
    return `${givenAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${name}`;
    };
const createQuestion = (number) => {
    return `Question: ${number}
Your asnwer: `;
};
const numberOfQuestions = 3;    

const brainEvenGame = () => {
    const name = readline.question(welcomeMsg);
    console.log(`Hello, ${name}!`);
    console.log(gameDescr);

    for (let i = 0; i < numberOfQuestions; i += 1) {
        const number = randomInt();
        const givenAnswer = readline.question(createQuestion(number));
        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (givenAnswer === correctAnswer && i === 2) {
            const congratsMsg = `Congratulations, ${name}!`;
            console.log(successResponse + '\n' + congratsMsg);
        } else if (givenAnswer === correctAnswer) {
            console.log(successResponse);
        } else {
            console.log(failureResponse(givenAnswer, correctAnswer, name));
            return;
        }
    }
};

export default brainEvenGame;