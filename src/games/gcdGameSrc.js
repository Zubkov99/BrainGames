/* eslint-disable import/prefer-default-export */
import { getRandomInt } from '../index.js';
import runGameEngine from '../runGameEngine.js';

const getTrueAnswer = (a, b) => {
  if (b) {
    return getTrueAnswer(b, a % b);
  }
  return Math.abs(a);
};

const createRound = () => {
  const firstNum = getRandomInt(0, 50);
  const secondNum = getRandomInt(0, 50);
  const question = `Question: ${firstNum} ${secondNum}`;
  return [getTrueAnswer(firstNum, secondNum), question];
};

const startGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  runGameEngine(createRound, description);
};

export default startGcdGame;
