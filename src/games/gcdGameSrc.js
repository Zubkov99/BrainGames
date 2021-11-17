/* eslint-disable import/prefer-default-export */
import { getRandomInt, getNameAndSayHi } from '../index.js';
import gameEngine from '../gameEngine.js';

const gcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const userName = getNameAndSayHi(description);

  const createRound = () => {
    const getTrueAnswer = (a, b) => {
      if (b) {
        return getTrueAnswer(b, a % b);
      }
      return Math.abs(a);
    };
    const firstNum = getRandomInt(0, 50);
    const secondNum = getRandomInt(0, 50);
    const question = `Question: ${firstNum} ${secondNum}`;
    return [getTrueAnswer(firstNum, secondNum), question];
  };

  gameEngine(createRound, userName);
};

export default gcdGame;
