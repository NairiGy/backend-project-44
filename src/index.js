import readline from 'readline-sync';

const welcome = (gameDescr) => {
  const welcomeMsg = `Welcome to the Brain Games!
May I Have your name? `;
  const name = readline.question(welcomeMsg);
  console.log(`Hello, ${name}!`);
  console.log(gameDescr);
  return name;
};

const askQuestion = (param) => {
  const questionBody = `Question: ${param}
Your asnwer: `;
  const answer = readline.question(questionBody);
  return answer;
};

const numberOfRounds = 3;

// Returns false if game ended, true otherwise
const playRound = (givenAnswer, correctAnswer, name, roundNumber) => {
  const successResponse = 'Correct!';
  const failureResponse = `${givenAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${name}`;
  const isPlayerRight = givenAnswer === correctAnswer;

  if (isPlayerRight) {
    console.log(successResponse);
    if (roundNumber === numberOfRounds) {
      const congratsMsg = `Congratulations, ${name}!`;
      console.log(congratsMsg);
      return false;
    }
    return true;
  }
  console.log(failureResponse);
  return false;
};

export { welcome, askQuestion, playRound };
