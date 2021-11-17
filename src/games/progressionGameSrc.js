import { getRandomInt, getNameAndSayHi } from '../index.js';
import gameEngine from '../gameEngine.js';

const progressionGame = () => {
  const description = 'What number is missing in the progression?';
  const userName = getNameAndSayHi(description);

  const createRound = () => {
    const arr = [];
    let randomNum = getRandomInt(0, 100);
    const randomElem = getRandomInt(0, 10);
    const progressionLength = 10;

    for (let i = 0; i < progressionLength; i += 1) {
      arr.push(randomNum += 2);
    }

    const trueAnswer = arr[randomElem];
    arr[randomElem] = '..';
    const question = `Question: ${arr.join(' ')}`;

    return [trueAnswer, question];
  };

  gameEngine(createRound, userName);
};

export default progressionGame;
