function solve(operator, ...rest){

    return rest
        .reduce(
            (a, b) => eval(`${a} ${operator} ${b}`), 
            rest.shift()
        );
}

console.log(solve('+', 5, 6, 11, 10));

function solve(x, y, operator){

    let result = 0;
    switch(operator){
        case '+': result = x + y; break;
        case '-': result = x - y; break;
        case '/': result = x / y; break;
        case '*': result = x * y; break;
        case '%': result = x % y; break;
        case '**': result = x ** y; break;
    }
    
    console.log(result);
}

solve(5, 6, '+');