function checkStrLength (testString, maxLength) {
  if (testString.length <= maxLength) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
console.log(checkStrLength('п g', 18));


function checkLength (testString, maxLength) {
  let newString;
  newString = testString.replaceAll(' ').toLowerCase();
  if (newString.length <= maxLength) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
console.log(checkLength('п g fjfviyttiuyriryitrfytrutr', 18));
