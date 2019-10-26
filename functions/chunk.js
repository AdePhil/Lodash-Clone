function chunk(array, by) {
  if (!by) {
    return array;
  }
  return array.reduce((acc, value, i) => {
    if (i % by === 0) {
      acc.push([value]);
      return acc;
    }
    acc[acc.length - 1].push(value);
    return acc;
  }, []);
}

// use
console.log(chunk([2, 3, 5, 6, 7, 8, 8, 1, 3], 0));
console.log(chunk([2, 3, 5, 6, 7, 8, 8, 1, 3], 2));
console.log(chunk([2, 3, 5, 6, 7, 8, 8, 1, 3], 3));
console.log(chunk([2, 3, 5, 6, 7, 8, 8, 1, 3], 40));
