import { getRandomInt } from '../index.js';
import runGameEngine from '../runGameEngine.js';

const generateTrueAnswer = (num) => {
  if (num < 3) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const createRound = () => {
  const randomNum = getRandomInt(1, 100);
  const question = `Question: ${randomNum}`;
  return [generateTrueAnswer(randomNum), question];
};

const startPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGameEngine(createRound, description);
};

export default startPrimeGame;
