const add = (x, y) => x + y;
const addInverse = (x, y) => x + (1 / y);
const concat = (x, y) => x + y.toString();

function solve(...params){
    console.log(
    [
        params.reduce(add, 0),
        params.reduce(addInverse, 0),
        params.reduce(concat, ""),
    ].join('\n'));
}

solve(1, 2, 3);