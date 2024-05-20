#!/usr/bin/env node

import { playGame, getRandomNumber } from '../src/utils.js';

const newRules = 'What number is missing in the progression?';

const generateNewProgression = (randomFirstNum, minLength, step) => {
  const resultNewProgression = [];
  for (let i = randomFirstNum; i < minLength; i += step) {
    if (resultNewProgression.length !== 10) resultNewProgression.push(i);
  }
  return resultNewProgression;
};

const generateNewRound = () => {
  const randomFirstNum = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const minLength = randomFirstNum + (step * 10);

  const newProgression = generateNewProgression(randomFirstNum, minLength, step);
  const hiddenIndex = getRandomNumber(0, newProgression.length - 1);
  const correctNewAnswer = newProgression[hiddenIndex].toString();
  newProgression[hiddenIndex] = '..';
  const question = newProgression.join(' ');

  return [question, correctNewAnswer];
};

const startBrainNewProgression = () => {
  playGame(newRules, generateNewRound);
};

startBrainNewProgression();
