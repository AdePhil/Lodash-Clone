function compact(array) {
  return array.filter(Boolean);
}

// use
console.log(compact([0, 1, false, 2, '', 3, undefined, NaN]));
