function solve(arr){

    let step = +arr.pop();

    let result = arr.filter((el, index) => {
        return index % step === 0;
    }).join('\n');

    console.log(result);
}

solve(['5','20','31','4','20','2']);