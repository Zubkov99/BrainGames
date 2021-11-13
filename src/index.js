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

export const gameEngine = (trueAnswer, userAnswer, userName, counter) => {
  if (trueAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    // eslint-disable-next-line no-unused-expressions
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}. \n Let's try again, ${userName}!`);
    return false;
  }
  if (counter >= 2) {
    console.log(`Congratulations, ${userName}!`);
  }

  return true;
};
