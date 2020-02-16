function solve() {

  let inputText = document.getElementById('text').value;
  let resultElement = document.getElementById('result');

  let numbers = [];
  let words = [];

  inputText
    .split(' ')
    .filter(x => x)
    .forEach(x => {
      if(isNaN(x)){
        let resultRow = x
          .split('')
          .map(ch => ch.charCodeAt(0))
          .join(' ');

        let paragraphElement = document.createElement('p');
        paragraphElement.textContent = resultRow;
        resultElement.appendChild(paragraphElement);
      } else {
        numbers.push(x);
      }
    });

    let lastWord = String.fromCharCode(...numbers);
    let paragraphElement = document.createElement('p');
    paragraphElement.textContent = lastWord;
    resultElement.appendChild(paragraphElement);
}