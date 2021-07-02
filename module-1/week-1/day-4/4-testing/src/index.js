function filterWithLetter(array, letter) {
  if (array.length === 0) {
    return null;
  }

  const newArray = [];

  for (let element of array) {
    if (element.startsWith(letter)) {
      newArray.push(element);
    }
  }

  //   if (newArray.length === 0) {
  //     return null;
  //   }

  return newArray;
}

if (typeof module !== "undefined") {
  module.exports = {
    filterWithLetter,
  };
}
