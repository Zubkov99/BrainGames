/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { getRandomInt, getNameAndSayHi, gameEngine } from '../index.js';

const evenGame = () => {
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

    if (gameEngine(trueAnswer, userAnswer, userName, i) === false) {
      break;
    }
  }
};

export default evenGame;
