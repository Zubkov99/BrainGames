/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { getRandomInt, getNameAndSayHi, gameEngine } from '../index.js';

const gsdGame = () => {
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
    if (gameEngine(+trueAnswer, +userAnswer, userName, i) === false) {
      break;
    }
  }
};

export default gsdGame;
