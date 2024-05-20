#!/usr/bin/env node

import { playGame, getRandomNumber } from '../src/utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (n) => {
  if (n === 0 || n === 1) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const trueAnswer = isPrime(question) === true ? 'yes' : 'no';
  return [question, trueAnswer];
};

const startBrainPrime = () => {
  playGame(rules, generateRound);
};

startBrainPrime();