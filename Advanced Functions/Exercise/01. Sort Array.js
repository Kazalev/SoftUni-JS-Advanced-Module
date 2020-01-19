function solve(arr, command){
    
    const ascSortNumbers = (a, b) => a - b;
    const descSortNumbers = (a, b) => b - a;

    if(command === 'asc'){
        arr.sort(ascSortNumbers);
    } else {
        arr.sort(descSortNumbers);
    }

    return arr;
}

solve([14, 7, 17, 6, 8], 'asc');

function solve2(arr, type){
    return type === 'asc'
    ? [...arr].sort((a, b) => a - b)
    : [...arr].sort((a, b) => b - a)
}