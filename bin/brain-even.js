#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomInt = (min, max) => {
  const start = Math.ceil(min);
  const end = Math.floor(max);
  return Math.floor(Math.random() * (end - start)) + start;
};

const getTrueAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

for (let i = 0; i < 3; i += 1) {
  const randomNum = getRandomInt(0, 100);
  const trueAnswer = getTrueAnswer(randomNum);
  console.log(`Question: ${randomNum}`);

  const userAnswer = readlineSync.question('Your answer:');

  if (trueAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
