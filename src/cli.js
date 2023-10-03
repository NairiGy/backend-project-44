import readline from 'readline-sync';

const cli = () => {
  const query = 'May I Have your name?';
  const name = readline.question(query);
  console.log(`Hello, ${name}!`);
};

export default cli;
