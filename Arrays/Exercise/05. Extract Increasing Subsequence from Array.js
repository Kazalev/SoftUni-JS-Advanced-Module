function solve(arr){
    let result = arr.slice(0, 1);
    for(let i = 1; i < arr.length; i++){
        if(arr[i] >= result[result.length - 1]){
            result.push(arr[i]);
        }
    }
    console.log(result.join('\n'));
}

function solve2(arr){
    let result = arr.reduce((acc, curr, index, arr) => {
        if(curr >= Math.max(...acc)){
            acc.push(curr);
        }
        return acc;
    }, []);
    console.log(result.join('\n'));
}

solve2([1, 3, 8, 4, 10, 12, 3, 2, 24]);