import readlineSync from 'readline-sync';
// import { getNameAndSayHi } from './index.js';
// let roundCounter = 3;

const gameEngine = (askAquestion, getTrueAnswer, userName) => {
  console.log(askAquestion());
  const trueAnswer = getTrueAnswer();
  const userAnswer = readlineSync.question('Your answer:');
  if (userAnswer === trueAnswer) {
    console.log('Correct!');
  } else {
    return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}". \n Let's try again, ${userName}!`);
  }
  //   roundCounter -= 1;
};

//   if (roundCounter > 0) {
//     return gameEngine(askAquestion, getTrueAnswer, userName);
//   }
//   return console.log(`Congratulations, ${userName}!`);

export default gameEngine;
