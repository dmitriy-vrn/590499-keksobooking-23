function getRandomNumber(min, max) {
  min = Math.ceil(min); // возвращает миниамльное число с округлением вверх
  max = Math.floor(max); // возвращает максимальное число с округлением вниз

  if (min < 0 || min >= max || max < 0) {
    return 'Неверно задан диапазон!';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(2, 5);

// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getArbitraryNumber(min, max, decimalPlacesNumber) {
  if (min < 0 || min >= max || max < 0 || decimalPlacesNumber < 0) {
    return 'Неверно задан диапазон!';
  }

  const decimalPlaces = 10 ** decimalPlacesNumber;
  return Math.floor(((Math.random() * (max - min + 1)) + min) * decimalPlaces) / decimalPlaces;
}

getArbitraryNumber (1, 10, 2);

// Источник: https://learn.javascript.ru/number

