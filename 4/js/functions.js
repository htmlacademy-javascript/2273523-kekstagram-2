function checkStrLength(testString, maxLength) {
  let result;
  if (testString.length <= maxLength) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
/* eslint-disable no-console */
console.log(checkStrLength('п g', 18)); // true

function checkLength(testString, maxLength) {
  let result;
  // Заменяем пробелы на пустую строку и переводим строку в нижний регистр
  const newString = testString.replaceAll(' ', '').toLowerCase();
  if (newString.length <= maxLength) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
/* eslint-disable no-console */
console.log(checkLength('п g fjfviyttiuyriryitrfytrutr', 18)); // false
