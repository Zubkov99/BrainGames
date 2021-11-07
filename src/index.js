import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => {
  const start = Math.ceil(min);
  const end = Math.floor(max);
  return Math.floor(Math.random() * (end - start)) + start;
};

export const getNameAndSayHi = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};
