/* eslint-disable import/prefer-default-export */
import { getRandomInt, getNameAndSayHi } from '../index.js';
import gameEngine from '../gameEngine.js';

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const userName = getNameAndSayHi(description);

  const createRound = () => {
    const getTrueAnswer = (num) => {
      if (num % 2 === 0) {
        return 'yes';
      } return 'no';
    };

    const randomNum = getRandomInt(0, 100);
    const trueAnswer = getTrueAnswer(randomNum);
    const question = `Question: ${randomNum}`;

    return [trueAnswer, question];
  };

  gameEngine(createRound, userName);
};

export default evenGame;
