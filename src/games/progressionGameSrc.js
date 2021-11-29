import { getRandomInt } from '../index.js';
import runGameEngine from '../runGameEngine.js';

const createProgression = (progressionLength, randomNum) => {
  let firstElem = randomNum;
  const progressionCollection = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progressionCollection.push(firstElem += 2);
  }
  return progressionCollection;
};

const createRound = () => {
  const randomNum = getRandomInt(0, 100);
  const randomElem = getRandomInt(0, 10);
  const progressionLength = 10;

  const progressionCollection = createProgression(progressionLength, randomNum);
  const trueAnswer = progressionCollection[randomElem];
  progressionCollection[randomElem] = '..';
  const dataForquestion = progressionCollection.join(' ');

  return [trueAnswer, dataForquestion];
};

const startProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  runGameEngine(createRound, description);
};

export default startProgressionGame;
