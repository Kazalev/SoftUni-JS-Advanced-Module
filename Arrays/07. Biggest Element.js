function solve(arr){

    //return Math.max(...arr.flat(1));

    let result = arr[0][0];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[j]; j++){
            if(arr[i][j] > result){
                result = arr[i][j];
            }
        }
    }

    console.log(result);
}

solve([
    [3, 5, 7, 12],
    [-1, 4, 33,2],
    [8, 3, 0, 4]
    ]);