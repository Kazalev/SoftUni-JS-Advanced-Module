function solve(arr){

    let step = +arr.pop() % arr.length;

    for(let i = 0; i < step; i++){
        let el = arr.pop();
        arr.unshift(el);
    }

    console.log(arr.join(' '));
}


function solve2(arr){
    
    let step = +arr.pop() % arr.length;

    let result = arr.reduceRight((acc, curr) => {
        if(step){
            acc = [curr, ...acc.slice(0, arr.length - 1)];
            step--;
        }
        return acc;
    }, [...arr]).join(' ');

    console.log(result);
}

solve2([
    'Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
    ]);