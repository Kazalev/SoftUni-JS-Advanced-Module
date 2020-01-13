function solve(arr){

    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            result.unshift(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    console.log(result);
}

function solve2(arr){

    const actionMap = {
        true: 'unshift',
        false: 'push'
    };

    let result = [];

    for(let i = 0; i < arr.length; i++){
        result[actionMap[arr[i] < 0]](arr[i]);
    }

    console.log(result);
}

solve2([3, -2, 0, -1]);