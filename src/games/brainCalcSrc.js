/* eslint-disable import/prefer-default-export */
import { getRandomInt } from '../index.js';
import runGameEngine from '../runGameEngine.js';

const getTrueAnswer = (x, operator, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return false;
  }
};

const createRound = () => {
  const signs = ['+', '-', '*'];

  const randomSigns = signs[getRandomInt(0, signs.length)];
  const firstNum = getRandomInt(10, 40);
  const secondNum = getRandomInt(10, 40);
  const question = `Question: ${firstNum} ${randomSigns} ${secondNum}`;
  const trueAnswer = getTrueAnswer(firstNum, randomSigns, secondNum);

  return [trueAnswer, question];
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGameEngine(createRound, description);
};

export default startCalcGame;
