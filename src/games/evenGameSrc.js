/* eslint-disable import/prefer-default-export */
import { getRandomInt } from '../index.js';
import runGameEngine from '../runGameEngine.js';

const getTrueAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const createRound = () => {
  const randomNum = getRandomInt(0, 100);
  const trueAnswer = getTrueAnswer(randomNum);
  const question = `Question: ${randomNum}`;

  return [trueAnswer, question];
};

const startEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGameEngine(createRound, description);
};

export default startEvenGame;
