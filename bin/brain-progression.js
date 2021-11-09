#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt, getNameAndSayHi } from '../src/index.js';

const userName = getNameAndSayHi();

for (let round = 0; round < 3; round += 1) {
  const arr = [];
  let randomNum = getRandomInt(0, 100);
  const randomElem = getRandomInt(0, 10);

  for (let i = 0; i < 10; i += 1) {
    arr.push(randomNum += 2);
  }

  const trueAnswer = arr[randomElem];
  arr[randomElem] = '..';

  console.log('What number is missing in the progression?');
  console.log(`Question: ${arr}`);

  const userAnswer = readlineSync.question('Your answer:');
  if (+userAnswer === +trueAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}. \n Let's try again, ${userName}!`);
    break;
  }

  if (round === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
