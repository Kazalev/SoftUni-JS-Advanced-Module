function solve(arr){
    
    function intersect(a, b) { 
        return a.filter((element, index) => b[index] === element).length;
    }
    
    let result = 0;

    for(let i = 0; i < arr.length - 1; i++){
        result += intersect(arr[i], arr[i + 1]);
    }

    console.log(result);
}

solve([
    ['2', '3', '4', '7','0'],
    ['4', '0', '5', '3','4'],
    ['2', '3', '5', '4','2'],
    ['9', '8', '7', '5','4']
    ]);