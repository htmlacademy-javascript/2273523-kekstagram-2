const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иван',
  'Сергей',
  'Екатерина',
  'Алена',
  'Мария',
  'Екатерина',
  'Дмитрий',
  'Лейсан',
  'Гоша',
  'Лика'
];

const DESCRIPTIONS = [
  'пейзаж',
  'портрет',
  'еда',
  'котики',
  'рисунок'
];

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const getRandomInt = () => {
  return Math.floor(Math.random() * 100);
};

const createDescription = () => {
  return {
    id: getRandom(1, 25),
    url: 'photos/' + getRandom(1, 25) + '.jpg',
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandom(15, 200),
    comments: {
      id: getRandomInt(),
      avatar: 'img/avatar-' +  getRandom(1, 6) + '.svg',
      message: getRandomElement(MESSAGES),
      name: getRandomElement(NAMES),
    }
  };
};

const typicalDescriptions = Array.from({length: 25}, createDescription);
console.log(typicalDescriptions);
