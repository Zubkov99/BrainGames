/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';

const gameEngine = (createRound, userName) => {
  const numberOfround = 3;

  for (let i = 0; i < numberOfround; i += 1) {
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
    if (i >= 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameEngine;
