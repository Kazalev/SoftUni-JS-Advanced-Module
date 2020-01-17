function solve(input){

    let sum = input[0].reduce((a, b) => a + b);
    let isMagic = true;

    for(let i = 0; i < input.length; i++){
        let sumRows = input[i].reduce((a, b) => a + b);
        let sumCols = input.map((x) => x[i]).reduce((a, b) => a + b);

        if(sumRows !== sumCols || sumCols !== sum || sumRows !== sum){
            isMagic = false;
        }
    }
    console.log(isMagic);
}

solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
    ]);

// solve([
//     [4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]
//     ]);