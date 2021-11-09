#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomInt, getNameAndSayHi } from '../../src/index.js';

// eslint-disable-next-line consistent-return
const getTrueAnswer = (num) => {
  if (num < 3) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
    return 'yes';
  }
};

const userName = getNameAndSayHi();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const randomNum = getRandomInt(1, 100);
  const trueAnswer = getTrueAnswer(randomNum);
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer:');

  if (userAnswer === trueAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}". \n Let's try again, ${userName}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
