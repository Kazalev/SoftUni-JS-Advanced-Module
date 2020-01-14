function solve(arr){

    let first = 0;
    let second = 0;

    for(let row = 0; row < arr.length; row++){
        first += arr[row][row];
        second += arr[row][arr.length - 1 - row];
    }

    console.log(first, second);
}

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
    ]);