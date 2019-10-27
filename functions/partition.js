function partition(array, callback) {
  const truePartition = array.filter(item => callback(item));
  const falsePartition = array.filter(item => !callback(item));
  return [truePartition, falsePartition];
}

// use
const users = [
  { name: 'Tv', price: 20, active: false },
  { name: 'radio', price: 70, active: true },
  { user: 'Bulb', price: 100, active: false },
];
console.log(
  partition(users, function(o) {
    return o.active;
  })
);
