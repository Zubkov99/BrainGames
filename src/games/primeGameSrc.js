import { getRandomInt, getNameAndSayHi } from '../index.js';
import gameEngine from '../gameEngine.js';

const primeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const userName = getNameAndSayHi(description);

  const createRound = () => {
    const randomNum = getRandomInt(1, 100);
    const question = `Question: ${randomNum}`;
    const generateTrueAnswer = () => {
      if (randomNum < 3) {
        return 'no';
      }
      for (let i = 2; i < randomNum; i += 1) {
        if (randomNum % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    return [generateTrueAnswer(), question];
  };

  gameEngine(createRound, userName);
};

export default primeGame;
