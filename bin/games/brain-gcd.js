#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt, getNameAndSayHi } from '../../src/index.js';

const userName = getNameAndSayHi();
console.log('Find the greatest common divisor of given numbers.');

const getTrueAnswer = (a, b) => {
  if (b) {
    return getTrueAnswer(b, a % b);
  }
  return Math.abs(a);
};

for (let i = 0; i < 3; i += 1) {
  const firsrNum = getRandomInt(0, 50);
  const secondNum = getRandomInt(0, 50);
  const trueAnswer = getTrueAnswer(firsrNum, secondNum);
  console.log(`Question: ${firsrNum} ${secondNum}`);

  const userAnswer = readlineSync.question('Your answer:');
  if (+userAnswer === +trueAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}". \n Let's try again, ${userName}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
