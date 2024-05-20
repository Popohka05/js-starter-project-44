import { playGame, getRandomNumber } from '../src/utils.js';

const rules = 'What is the result of the expression?';

const calculateResult = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const createRound = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = calculateResult(number1, randomOperator, number2).toString();
  return [question, correctAnswer];
};

const startBrainCalc = () => {
  playGame(rules, createRound);
};

// eslint-disable-next-line eol-last
startBrainCalc();