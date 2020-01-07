function solve(delimiter, x = 5){
    
    let result = new Array(x);
    for(let i = 0; i < x; i++){
        result[i] = delimiter
            .repeat(x)
            .split('')
            .join(' ');
    }
    console.log(result.join('\n'));
}

solve('*', 10);