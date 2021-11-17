/* eslint-disable import/prefer-default-export */
import { getRandomInt, getNameAndSayHi } from '../index.js';
import gameEngine from '../gameEngine.js';

const calcGame = () => {
  const description = 'What is the result of the expression?';
  const userName = getNameAndSayHi(description);

  const createRound = () => {
    const getTrueAnswer = (x, operator, y) => {
      switch (operator) {
        case '+':
          return x + y;
        case '-':
          return x - y;
        default:
          return x * y;
      }
    };
    const signs = ['+', '-', '*'];

    const randomSigns = signs[getRandomInt(0, signs.length)];
    const firstNum = getRandomInt(0, 20);
    const secondNum = getRandomInt(0, 20);
    const randomExpression = `${firstNum} ${randomSigns} ${secondNum}`;
    const question = `Question: ${randomExpression}`;
    const trueAnswer = getTrueAnswer(firstNum, randomSigns, secondNum);

    return [trueAnswer, question];
  };

  gameEngine(createRound, userName);
};

export default calcGame;
