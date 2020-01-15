function solve(arr){

    let count = 0;
    let result = [];

    arr.forEach(element => {
        if(element === 'add'){
            count++;
            result.push(count);
        } else if (element === 'remove'){
            count++;
            result.pop();
        }
    });

    if(result.length > 0){
        console.log(result.join('\n'));
    } else {
        console.log(`Empty`);
    }
}

function solve2(arr){

    let commands = {
        counter: 1,
        add: (arr, num) => [...arr, num],
        remove: (arr) => [...arr.slice(0, arr.length - 1)]
    };

    let result = arr.reduce((acc, curr) => {
        acc = commands[curr](acc, commands.counter);
        commands.counter++;
        return acc;
    }, []);

    result.length > 0 ? console.log(result.join('\n')) : console.log(`Empty`);
}

solve2(['add', 'add', 'add', 'add']);
solve2(['remove', 'remove', 'remove']);