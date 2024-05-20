#!/usr/bin/env node
import { playGame, getRandomNumber } from '../src/utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkIfEven = (number) => number % 2 === 0;

const generateRound = () => {
  const questionNumber = getRandomNumber(1, 100);
  const correctAnswer = checkIfEven(questionNumber) ? 'yes' : 'no';
  return [questionNumber, correctAnswer];
};

const startBrainEvenGame = () => {
  playGame(gameRules, generateRound);
};

startBrainEvenGame();
