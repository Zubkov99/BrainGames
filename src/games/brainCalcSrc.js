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
  const firstNum = getRandomInt(0, 20);
  const secondNum = getRandomInt(0, 20);
  const randomExpression = `${firstNum} ${randomSigns} ${secondNum}`;
  const question = `Question: ${randomExpression}`;
  const trueAnswer = getTrueAnswer(firstNum, randomSigns, secondNum);

  return [trueAnswer, question];
};

const calcGame = () => {
  const description = 'What is the result of the expression?';
  runGameEngine(createRound, description);
};

export default calcGame;
