#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt, getNameAndSayHi } from '../../src/index.js';

const getTrueAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const userName = getNameAndSayHi();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const randomNum = getRandomInt(0, 100);
  const trueAnswer = getTrueAnswer(randomNum);
  console.log(`Question: ${randomNum}`);

  const userAnswer = readlineSync.question('Your answer:');

  if (trueAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }

  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
