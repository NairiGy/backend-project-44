import readline from 'readline-sync';

const roundsCount = 3;

const MessageMap = {
  askName: () => `Welcome to the Brain Games!
May I Have your name? `,
  welcome: (name) => `Hello, ${name}!`,
  question: (expr) => `Question: ${expr}
Your asnwer: `,
  success: () => 'Correct!',
  failure: (name, question, answer) => `${question} is wrong answer ;(. Correct answer was ${answer}.
Let's try again, ${name}!`,
  congrats: (name) => `Congratulations, ${name}!`,
};

const welcome = (gameDescr) => {
  const name = readline.question(MessageMap.askName());
  console.log(MessageMap.welcome(name));
  console.log(gameDescr);
  return name;
};

const askQuestion = (expr) => {
  const answer = readline.question(MessageMap.question(expr));
  return answer;
};

const run = (generateRound, description) => {
  const name = welcome(description);
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
    const [question, answer] = rounds[i];
    if (question === answer) {
      console.log(MessageMap.success());
    } else {
      console.log(MessageMap.failure(name, question, answer));
      return;
    }
  }
  console.log(MessageMap.congrats(name));
};

export {
  askQuestion,
  run,
};
