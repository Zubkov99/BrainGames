/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { getRandomInt, getNameAndSayHi, gameEngine } from '../index.js';

const calcGame = () => {
  const userName = getNameAndSayHi();
  console.log('What is the result of the expression?');
  const signs = ['+', '-', '*'];

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

  for (let i = 0; i < 3; i += 1) {
    const randomSigns = signs[getRandomInt(0, signs.length)];
    const firstNum = getRandomInt(0, 20);
    const secondNum = getRandomInt(0, 20);
    const randomExpression = `${firstNum} ${randomSigns} ${secondNum}`;
    const trueAnswer = getTrueAnswer(firstNum, randomSigns, secondNum);

    console.log(`Question: ${randomExpression}`);

    const userAnswer = readlineSync.question('Your answer:');

    if (gameEngine(+trueAnswer, +userAnswer, userName, i) === false) {
      break;
    }
  }
};

export default calcGame;
