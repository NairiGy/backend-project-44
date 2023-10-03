import readline from 'readline-sync';

const cli = () => {
  console.log('Welcome to the Brain Games!');
  const query = 'May I Have your name? ';
  const name = readline.question(query);
  console.log(`Hello, ${name}!`);
};

export default cli;
