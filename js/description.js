import './data.js';
import './number-generate';

const createDescription = () => ({
  id: getRandom(1, 25),
  url: `photos/${ getRandom(1, 25) }.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandom(15, 200),
  comments: {
    id: getRandomInteger(),
    avatar: `img/avatar-${ getRandom(1, 6) }.svg`,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  }
});

const typicalDescriptions = Array.from({length: 25}, createDescription);
/* eslint-disable no-console */
console.log(typicalDescriptions);

export {createDescription, typicalDescriptions};
