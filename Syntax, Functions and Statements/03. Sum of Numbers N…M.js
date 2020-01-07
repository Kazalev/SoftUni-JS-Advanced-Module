function solve(min, max){

    min = +min;
    max = +max;

    let result = 0;
    for(let i = min; i <= max; i++){
        result += i;
    }

    console.log(result);
    //return result;
}

solve(-8, 20);



function solve(n, m){

    let num1 = Number(n);
    let num2 = Number(m);
    let result = 0;
    for(let i = num1; i <= num2; i++){
        result += i;
    }

    console.log(result);
}

solve(1, 5);