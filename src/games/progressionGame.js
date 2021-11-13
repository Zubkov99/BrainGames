import readlineSync from 'readline-sync';
import { getRandomInt, getNameAndSayHi, gameEngine } from '../index.js';

const progressionGame = () => {
  const userName = getNameAndSayHi();
  console.log('What number is missing in the progression?');

  for (let round = 0; round < 3; round += 1) {
    const arr = [];
    let randomNum = getRandomInt(0, 100);
    const randomElem = getRandomInt(0, 10);
    const progressionLength = 10;

    for (let i = 0; i < progressionLength; i += 1) {
      arr.push(randomNum += 2);
    }

    const trueAnswer = arr[randomElem];
    arr[randomElem] = '..';
    console.log(`Question: ${arr.join(' ')}`);

    const userAnswer = readlineSync.question('Your answer:');
    if (gameEngine(+trueAnswer, +userAnswer, userName, round) === false) {
      break;
    }
  }
};

export default progressionGame;
