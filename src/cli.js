import readline from "readline-sync";

const cli = () => {
  const query = `Welcome to the Brain Games!
May I Have your name? `;
  const name = readline.question(query);
  console.log(`Hello, ${name}!`);
};

export default cli;
