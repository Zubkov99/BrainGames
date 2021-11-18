/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';
import { getNameAndSayHi } from './index.js';

const runGameEngine = (createRound, description) => {
  const numberOfRounds = 3;

  const userName = getNameAndSayHi(description);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const trueAnswerAndQuestion = createRound();
    const correctAnswer = trueAnswerAndQuestion[0];
    const question = trueAnswerAndQuestion[1];

    console.log(question);
    const userAnswer = readlineSync.question('Your answer:');

    // eslint-disable-next-line eqeqeq
    if (correctAnswer == userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runGameEngine;
