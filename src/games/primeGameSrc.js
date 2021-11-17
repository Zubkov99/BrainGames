import readlineSync from 'readline-sync';
import { getRandomInt, getNameAndSayHi, generateRound } from '../index.js';
import gameEngine from '../gameEngine.js';

const primeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const randomNum = getRandomInt(1, 100);
  const generateQuestion = () => `Question: ${randomNum}`;
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

  const userName = getNameAndSayHi(description);

  // const game = gameEngine(generateQuestion, generateTrueAnswer, userName);

  generateRound(gameEngine(generateQuestion, generateTrueAnswer, userName));

  // for (let i = 0; i < 3; i += 1) {
  //   const randomNum = getRandomInt(1, 100);
  //   const trueAnswer = getTrueAnswer(randomNum);
  //   // console.log(`Question: ${randomNum}`);
  //   const userAnswer = readlineSync.question('Your answer:');

  //   if (gameEngine(trueAnswer, userAnswer, userName, i) === false) {
  //     break;
  //   }
  // }
};

export default primeGame;
