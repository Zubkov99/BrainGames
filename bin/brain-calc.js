#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt, getNameAndSayHi } from '../src/index.js';

const userName = getNameAndSayHi();
console.log('What is the result of the expression?');
const signs = ['+', '-', '*'];

const getTrueAnswer = (a, sign, b) => {
  const result = `${a} ${sign} ${b}`;
  // eslint-disable-next-line no-eval
  return eval(result);
};

for (let i = 0; i < 3; i += 1) {
  const randomSigns = signs[getRandomInt(0, 3)];
  const firsrNum = getRandomInt(0, 20);
  const secondNum = getRandomInt(0, 20);
  const randomExpression = `${firsrNum} ${randomSigns} ${secondNum}`;
  const trueAnswer = getTrueAnswer(firsrNum, randomSigns, secondNum);

  console.log(`Question: ${randomExpression}`);

  const userAnswer = readlineSync.question('Your answer:');

  if (+userAnswer === +trueAnswer) {
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
