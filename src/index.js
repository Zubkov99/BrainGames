import readlineSync from 'readline-sync';

// eslint-disable-next-line arrow-body-style
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
};

export const getNameAndSayHi = (description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(description);
  return userName;
};
