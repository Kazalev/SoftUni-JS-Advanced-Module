function solve(...params){

    console.log(`The largest number is ${params.sort((a, b) => a - b).pop()}.`);     
}

solve(5, -3, 16);