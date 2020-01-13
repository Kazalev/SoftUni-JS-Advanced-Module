function solve(arr){
    let result = '';
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            result += arr[i] + " ";
        }
    }
    console.log(result.join(' '));
}

function solve2(arr){
    return arr.filter((_, i) => i % 2 === 0).join(' ');
}
console.log(solve2(['20', '30', '40']));