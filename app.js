// write code here
let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

function getAverageAge(arr) {
  if (arr.length === 0) return 0;

  let sumAge = arr.reduce((acc, person) => acc + person.age, 0);
  return sumAge / arr.length;
}

console.log(getAverageAge(arr)); 
