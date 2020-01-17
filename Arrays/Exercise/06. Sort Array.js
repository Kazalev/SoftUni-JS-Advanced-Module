function solve(arr){

    console.log([...arr].sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }).join('\n'));
}

solve([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
    ]);