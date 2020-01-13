function solve(arr){

    console.log(arr
        .slice()
        .sort((a, b) => a - b)
        .slice(0, 2));
}

solve([3, 0, 10, 4, 7, 3]);