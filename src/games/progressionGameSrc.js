import { getRandomInt } from '../index.js';
import runGameEngine from '../runGameEngine.js';

const createRound = () => {
  const progressionCollection = [];
  let randomNum = getRandomInt(0, 100);
  const randomElem = getRandomInt(0, 10);
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    progressionCollection.push(randomNum += 2);
  }

  const trueAnswer = progressionCollection[randomElem];
  progressionCollection[randomElem] = '..';
  const question = `Question: ${progressionCollection.join(' ')}`;

  return [trueAnswer, question];
};

const progressionGame = () => {
  const description = 'What number is missing in the progression?';
  runGameEngine(createRound, description);
};

export default progressionGame;
