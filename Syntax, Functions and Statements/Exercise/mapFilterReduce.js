//Map, Filter and Reduce functions simple exams

let numbers = [1, 2, 3, 4, 5];

let multipliedNumbers = numbers.map(x => x * 2);
let filteredNumbers = numbers.filter(x => x > 2);
let reducedNumbers = numbers.reduce((acc, cur) => acc + cur); //doesn't return array

console.log(multipliedNumbers);
console.log(filteredNumbers);
console.log(reducedNumbers);
console.log(numbers);