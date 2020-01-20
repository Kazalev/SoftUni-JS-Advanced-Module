function solve() {
    
    let append = '';
    let btn = Array.from(document.querySelectorAll('button'))
        .map(x => x.addEventListener('click', (e) => {
            let press = e.target.value;
            let showInput = document.getElementById('expressionOutput');
            let result = document.getElementById('resultOutput');

            if (press === 'Clear') {
                showInput.innerHTML = '';
                result.innerHTML = '';
                append = '';
            }
            else if (press === '=' && append.length > 1) {
                let num = append.split(' ');
                if (num[2] === '') {
                    result.innerHTML = 'NaN';
                }
                let sum = eval(`${num[0]} ${num[1]} ${num[2]}`); //evaluates JavaScript code represented as a string
                result.innerHTML = sum;
            }
            else {
                if (press !== '+' && press !== '-' && press !== '/' && press !== '*') {
                    append += press;
                    showInput.innerHTML = append;
                }
                else {
                    append += ' ' + press + ' ';
                    showInput.innerHTML = append;
                }
            }
        }));
}