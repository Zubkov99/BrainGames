import { getRandomInt } from '../index.js';
import runGameEngine from '../runGameEngine.js';

const checkPrime = (number) => {
  if (number < 3) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateTrueAnswer = (number) => (checkPrime(number) ? 'yes' : 'no');

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
